import React from "react";
import { useForm } from "react-hook-form";
import useRows from "../hooks/proveedores/useRows";
import useColumns from "../hooks/proveedores/useColumns";
import { useTable} from "react-table";

    const IngresarPedidoProveedor = () => {
            const { 
              register, 
              handleSubmit,
              watch
             } = useForm(
              {defaultValues:{cliente:'Tienda Llanos'}}
             );
            
             const onSubmit = (data) => {
                console.log(data);
            };
            return (
            <div class="signupFrm">
                <form onSubmit={handleSubmit(onSubmit)} class="form" >
                    <div class="inputContainer">
                      <label>RUC de Empresa</label>
                      <input type="text" {...register('ruc',{required:true})} />
                    </div>
                    
                    <div class="inputContainer">
                      <label>Producto</label>
                      <input type="text" {...register('producto',{required:true})} />
                    </div>
                    <div class="inputContainer">
                      <label>Cantidad</label>
                      <input type="text" {...register('cantidad',{required:true})} />
                    </div>
                    <div class="inputContainer">
                      <label>Cliente</label>
                      <input type="text" {...register('cliente',{required:true})} />
                    </div>
                         <input type="submit" value="Registro" class="submitBtn" />
                    <div class="inputContainer">
                        <label>Informacion:</label>
                        <p>{watch('ruc')},{watch('producto')},{watch('cantidad')},{watch('cliente')}</p>
            
                    </div>
                </form>
            </div>
    );
    }


export const Proveedores = () => {

        const columns = useColumns();
        const data = useRows();
        const table = useTable({ columns, data });
    
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow
            } = table;

    return (
        <div>   
            <div><h1 class ="registro">LISTA DE PROVEEDORES</h1></div>

            <table {...getTableProps()}>
              <thead>
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
            <div><h1 class ="registro">REGISTRO DE PEDIDO A PROVEEDOR</h1>
                {IngresarPedidoProveedor()}
            </div>   
        </div>
    );
}