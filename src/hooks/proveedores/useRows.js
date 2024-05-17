import { useMemo } from "react";

export default function useRows() {
  const rows = useMemo(
    () => [
        {
            id : 1,
            nombre : " INVERSIONES LUISAB",
            ruc: "20609323494",
            direccion : "calle belgica 123, urb. lima",
            email : " luisab@gmail.com",
            telefono : " 948576123"
        },
        {
          id : 2,
          nombre : " INVERSIONES COLLADO",
          ruc: "10428286249",
          direccion : "calle italia 123, urb. portales",
          email : " collado@gmail.com",
          telefono : " 963852741"
        },
        {
          id : 3,
          nombre : " GRUPO MAISA",
          ruc: "20609323971",
          direccion : "calle asturias 957, urb. lima",
          email : " maisa@gmail.com",
          telefono : " 978548123"
        }],
        []
    );

  return rows;
}