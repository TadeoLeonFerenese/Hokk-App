import { useEffect, useState } from "react";

export const Message = () => {
  const [first, setfirst] = useState(second);

  useEffect(() => {
    const onMouseMove = (event) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
