import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Nav } from "../components/Nav/Nav";
import { Register } from "../pages/Register/Register";

export const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
