import React from "react";
import { useTable} from "react-table";
import useRows from "../hooks/cliente/useRows";
import useColumns from "../hooks/cliente/useColumns";
import { useForm } from "react-hook-form";

    const Select = React.forwardRef(({ onChange, name, label }, ref) => (
      <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange}>
        <option value=""></option>
          <option value="tienda">tienda</option>
          <option value="delivery">delivery</option>
        </select>
      </>
    ));

    const SelectCantidad = React.forwardRef(({ onChange, name, label }, ref) => (
      <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </>
    ));

    const SelectCategoria = React.forwardRef(({ onChange, name, label }, ref) => (
      <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange}>
        <option value=""></option>
          <option value="Electrico">Electrico</option>
          <option value="Pintura">Pintura</option>
          <option value="Gasfiteria">Gasfiteria</option>
          <option value="Carpinteria">Carpinteria</option>
          <option value="Jardineria">Jardineria</option>
        </select>
      </>
    ));
   
    const IngresarPedido = () => {
      const { 
        register, 
        handleSubmit,
        watch
        } = useForm();

      const onSubmit = (data) => { 
        console.log("PEDIDO",data)
      } 

      return (
            <div class="signupFrm">
              <form onSubmit={handleSubmit(onSubmit)} class="form" >
                <div class="inputContainer">
                    <label>Nombre del Cliente</label>
                    <input type="text" {...register('nombre',{required:true})} />
                </div>
                <div class="inputContainer">
                    <label>Direccion</label>
                    <input type="text" {...register('direccion',{required:true})} />
                </div>
                <div class="inputContainer">
                    <SelectCategoria label=" Categoria" {...register('categoria',{required:true})} />
                </div>
                <div class="inputContainer">
                    <label>Producto</label>
                    <input type="text" {...register('producto',{required:true})} />
                </div>
                <div class="inputContainer">
                    <SelectCantidad label=" Cantidad" {...register('cantidad',{required:true})} />
                </div>
                <div class="inputContainer">
                    <Select label=" Modo de recepcion" {...register('recepcion',{required:true})} />
                </div>
                  <input type="submit" value="Registro" class="submitBtn" />
                <div class="inputContainer">
                  <label>Informacion:</label>
                  <p>{watch('nombre')},{watch('direccion')},{watch('producto')},{watch('categoria')},{watch('cantidad')},{watch('recepcion')}</p>
            
                </div>
              </form>
            </div>

          );
            
    }

export const Pedido = () => {
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
             <div>
              <h1 class ="registro">LISTA DE PEDIDOS DE CLIENTES</h1>
             </div>

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
            <div>
              <h1 class ="registro" >REGISTRAR PEDIDO DE CLIENTE</h1>
                {IngresarPedido()}
             </div>
        </div>
    );
}
