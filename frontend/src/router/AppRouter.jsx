import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Nav } from "../components/Nav/Nav";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import { Dash } from "../pages/Dasboard/Dash";
import { Rifa } from "../pages/CreateRifas/Rifas";
import { DetallesRifa } from "../pages/DetallesRifa/DetallesRifa";
import { HistorialParticipante } from "../pages/HistorialParticipante/HistorialParticipante";
import { UpdateProfile } from "../pages/UpdateProfile/UpdateProfile";
import { Apuestas } from "../pages/CreateApuestas/Apuestas";
import { DetallesApuesta } from "../pages/DetailsApueta/DetailsApuesta";

export const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/rifa" element={<Rifa />} />
        <Route path="/detallesRifa/:id" element={<DetallesRifa />} />
        <Route path="/detallesApuesta/:id" element={<DetallesApuesta />} />
        <Route path="/historialParticipante" element={<HistorialParticipante />} />
        <Route path="/apuesta" element={<Apuestas />} />
      </Routes>
    </>
  );
};
