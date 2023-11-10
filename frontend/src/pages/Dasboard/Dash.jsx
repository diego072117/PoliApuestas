import React from "react";
import { useSelector } from "react-redux";

export const Dash = () => {

  const user = useSelector((state) => state.users.auth.user);
  return (
    <>
      <div>
        <h1>Hola {user ? user.name : "user"}</h1>
      </div>
    </>
  );
};
