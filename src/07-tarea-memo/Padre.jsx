import React, { useCallback, useMemo } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";

// const heavystuffs = (itinerationNumber = 100) => {
//   for (let i = 0; i < itinerationNumber; i++) {
//     console.log("Oh shit here we go again");
//   }
// };

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //   const valueMemoraized = useMemo(() => heavystuffs(valor), [valor]);

  const incrementar = useCallback((num) => {
    setValor((oldValue) => oldValue + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
