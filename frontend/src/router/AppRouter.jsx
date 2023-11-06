import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Nav } from "../components/Nav/Nav";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import { Dash } from "../pages/Dasboard/Dash";

export const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </>
  );
};
