import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  // en este caso estoy desestructurando el objeto que retorno en "useCounter", si fuese un array seria con "[]"
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(counter)} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => reset(counter)} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement(counter)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
