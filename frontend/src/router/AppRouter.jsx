import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Nav } from "../components/Nav/Nav";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import { Dash } from "../pages/Dasboard/Dash";
import { Perfil } from "../pages/Perfil/Perfil";
import { Rifa } from "../pages/CreateRifas/Rifas";
import { ListRifas } from "../pages/ListRifas/ListRifas";
import { DetallesRifa } from "../pages/DetallesRifa/DetallesRifa";

export const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/rifa" element={<Rifa />} />
        <Route path="/listRifas" element={<ListRifas />} />
        <Route path="/detallesRifa/:id" element={<DetallesRifa />} />
      </Routes>
    </>
  );
};
