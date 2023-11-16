import { useState } from "react";
import { InfoUser } from "../../components/InfoUser/InfoUser";
import { ListRifas } from "../../components/ListRifas/ListRifas";
import { useTransaccion } from "../../hooks/useTransaccion";
import { useSelector } from "react-redux";
import "./Module.scss";
import { useValidators } from "../../hooks/useValidations";

export const Dash = () => {
  const { NewTransaccion } = useTransaccion();
  const { isUserRolOrganizador, isUserRolParticipante } = useValidators();

  const [montoTransaccion, setMontoTransaccion] = useState();
  const user = useSelector((state) => state.users.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    NewTransaccion({
      id_usuario: user.id,
      monto_transaccion: montoTransaccion,
    });
  };
  return (
    <div className="container-dash">
      <div className="info-user-dash">
        <InfoUser />
      </div>
      <div className="info-rifas-dash">
        {isUserRolOrganizador() && (
          <div className="recarga">
            <h2>Tus Rifas</h2>
          </div>
        )}
        {isUserRolParticipante() && (
          <div className="recarga">
            <h2>Rifas Disponibles</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="Recarga aqui tu cuenta"
                value={montoTransaccion}
                onChange={(e) => setMontoTransaccion(e.target.value)}
              />
              <button type="submit">
                <i className="fa-solid fa-money-bills"></i>
              </button>
            </form>
          </div>
        )}

        <ListRifas />
      </div>
    </div>
  );
};
