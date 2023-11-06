import React from "react";
import { useSelector } from "react-redux";
import { UseUserActions } from "../../hooks/UseUserActions";

export const Dash = () => {
  const { LogoutUser } = UseUserActions();
  const user = useSelector((state) => state.users.auth.user);
  return (
    <>
      <div>
        <h1>Hola {user ? user.name : "user"}</h1>
        <button onClick={LogoutUser}>Cerrar Sesión</button>
      </div>
    </>
  );
};
