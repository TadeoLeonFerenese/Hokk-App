import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      {/*esto es un Ancord con esteroides, hace que cuando refreshees solo carga esta porcion de dato y no renderiza todo */}
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="login">Login</Link>
    </>
  );
};
