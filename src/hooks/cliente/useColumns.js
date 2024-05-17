import { useMemo } from "react";


export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "NOMBRE",
        accessor: "nombre"
      },
      {
        Header: "DIRECCIÓN",
        accessor: "direccion"
      },
      {
        Header: "CATEGORIA",
        accessor: "categoria"
      },
      {
        Header: "PRODUCTO",
        accessor: "producto"
      },
      {
        Header: "CANTIDAD",
        accessor: "cantidad"
      },
      {
        Header: "MODO DE RECEPCION",
        accessor: "modo"
      },
    ],
    []
  );

  return columns;
}