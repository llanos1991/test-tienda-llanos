import { useMemo } from "react";


export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "NOMBRE O RAZON SOCIAL",
        accessor: "nombre"
      },
      {
        Header: "RUC",
        accessor: "ruc"
      },
      {
        Header: "DIRECCIÓN",
        accessor: "direccion"
      },
      {
        Header: "EMAIL",
        accessor: "email"
      },
      {
        Header: "TELEFONO",
        accessor: "telefono"
      }],
    []
  );

  return columns;
}