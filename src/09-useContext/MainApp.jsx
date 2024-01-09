import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      {/* <h1>Main App</h1> */}
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to={"/about"} />} />
        {/*Esto hace que cuando estes fuera de el Path que estas barajando te vuelva al home*/}
      </Routes>
    </>
  );
};
