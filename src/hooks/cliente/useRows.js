import { useMemo } from "react";

export default function useRows() {
  const rows = useMemo(
    () => [
        {
            id : 1,
            nombre : " christopher llanos vasquez",
            direccion : "calle belgica 123, urb. lima",
            categoria : " Electrico",
            producto : " toma corriente",
            cantidad : 1,
            modo : "tienda" //tienda u delivery
        },
        {
            id : 2,
            nombre : " christina condor melani",
            direccion : "calle asturias 124, urb. cusco",
            categoria : " Electrico",
            producto : " enchufe",
            cantidad : 2,
            modo : "delivery"
        }
    ],
    []
  );

  return rows;
}