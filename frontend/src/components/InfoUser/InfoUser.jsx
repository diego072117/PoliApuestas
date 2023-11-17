import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Module.scss";
import { useTransaccion } from "../../hooks/useTransaccion";

export const InfoUser = () => {
  const user = useSelector((state) => state.users.auth.user);
  const saldo = useSelector((state) => state.transaccion.saldoUser);
  const { getSaldoUser } = useTransaccion();
  
  useEffect(() => {
    getSaldoUser(user.id);
  }, []);

  return (
    <div className="container-info-user">
      <div className="container-user">
        <img
          src="https://avatars.githubusercontent.com/u/107522367?v=4"
          alt=""
        />
        <div className="info-user">
          <p className="name-user">
            {user.name}_{user.lastName}
          </p>
          <p className="email-user">{user.email}</p>
          <p className="document-user">
            {user.tipoDocumento}: {user.numeroDocumento}
          </p>
          <p className="tel-user">Tel: {user.telefono}</p>
          <p className="tel-user">Rol: {user.rol}</p>
          <p className="tel-user">
            Saldo: {saldo ? saldo.monto_transaccion : 0}
          </p>
        </div>
        <Link to="#" className="button-user">
          Editar perfil
        </Link>
        <p className="boletas">
          <i className="fa-solid fa-bookmark"></i>{" "}
          <span className="boletas-compradas">11</span> Boletas
        </p>
      </div>
    </div>
  );
};
