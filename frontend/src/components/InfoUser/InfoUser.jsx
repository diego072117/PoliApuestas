import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Module.scss";

export const InfoUser = () => {
  const user = useSelector((state) => state.users.auth.user);
  return (
    <div className="container-dash">
      <div className="container-user">
        <img
          src="https://avatars.githubusercontent.com/u/103591603?v=4"
          alt=""
        />
        <div className="info-user">
          <p className="name-user">
            {user.name}_{user.lastName}
          </p>
          <p className="email-user">{user.email}</p>
        </div>
        <Link to="#" className="button-user">
          Editar perfil
        </Link>
        <p>
          <i className="fa-solid fa-bookmark"></i> 11 Boletas
        </p>
      </div>
    </div>
  );
};
