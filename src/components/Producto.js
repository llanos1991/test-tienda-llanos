import {React, useState} from "react";
import { useTable,useGlobalFilter, useAsyncDebounce } from "react-table";
import useRows from "../hooks/producto/useRows";
import useColumns from "../hooks/producto/useColumns";

function Filter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const totalAvailable = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
  
    const onFilterChange = useAsyncDebounce(
      (value) => setGlobalFilter(value || undefined),
      200
    );
  
    const handleInputChange = (e) => {
      setValue(e.target.value);
      onFilterChange(e.target.value);
    };
  
    return (
      <span className="cars-filter">
        Buscar favorito &nbsp;{" "}
        <input
          size={40}
          value={value || ""}
          onChange={handleInputChange}
          placeholder={`${totalAvailable} busca la herramienta...`}
        />
      </span>
    );
  }

export const Producto = () => {
   
    const columns = useColumns();
    const data = useRows();
    const table = useTable({ columns, data }, useGlobalFilter);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { globalFilter }
      } = table;

    return (
        <div>
            <h1 class ="registro" >LISTA DE PRODUCTOS DE LA TIENDA</h1>
            <table {...getTableProps()}>
        <thead>
        <tr>
            <th colSpan={4}>
              <Filter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
          {
            // Recorremos las columnas
            headerGroups.map((headerGroup) => (
              // Añadimos las propiedades al conjunto de columnas
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Recorremos cada columna del conjunto para acceder a su información
                  headerGroup.headers.map((column) => (
                    // Añadimos las propiedades a cada celda de la cabecera
                    <th {...column.getHeaderProps()}>
                      {
                        // Pintamos el título de nuestra columna (propiedad "Header")
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Añadimos las propiedades al cuerpo de la tabla */}
        <tbody {...getTableBodyProps()}>
          {
            // Recorremos las filas
            rows.map((row) => {
              // Llamamos a la función que prepara la fila previo renderizado
              prepareRow(row);
              return (
                // Añadimos las propiedades a la fila
                <tr {...row.getRowProps()}>
                  {
                    // Recorremos cada celda de la fila
                    row.cells.map((cell) => {
                      // Añadimos las propiedades a cada celda de la fila
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Pintamos el contenido de la celda
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
        </div>
    );
}