export const ShowIncrement = ({ increment }) => {
  console.log("me volvi a generar");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      incrementar
    </button>
  );
};
