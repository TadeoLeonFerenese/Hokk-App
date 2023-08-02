import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = (event) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      console.log("Message Unmounted");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
