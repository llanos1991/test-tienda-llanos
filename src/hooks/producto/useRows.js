import { useMemo } from "react";

export default function useRows() {
  const rows = useMemo(
    () => [
        {
            id : 1,
            categoria : "electrico",
            fabricante : "General electric",
            nombre : " toma corriente",
            cantidad : 50
        },
        {
            id : 2,
            categoria : "electrico",
            fabricante : "General electric",
            nombre : "cable 1 pulgada",
            cantidad : 80
        },
        {
            id : 3,
            categoria : "electrico",
            fabricante : "General electric",
            nombre : "interruptor",
            cantidad : 20
        },
        {
            id : 4,
            categoria : "electrico",
            fabricante : "ticino",
            nombre : "enchufe",
            cantidad : 250
        }
    ],
    []
  );

  return rows;
}