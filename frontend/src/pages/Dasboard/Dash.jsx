import { useState } from "react";
import { InfoUser } from "../../components/InfoUser/InfoUser";
import { ListRifas } from "../../components/ListRifas/ListRifas";
import { useTransaccion } from "../../hooks/useTransaccion";
import { useSelector } from "react-redux";
import "./Module.scss";
import { useValidators } from "../../hooks/useValidations";
import { ListApuestas } from "../../components/ListApuesta/ListApuestas";

export const Dash = () => {
  const { NewTransaccion } = useTransaccion();
  const { isUserRolOrganizador, isUserRolParticipante } = useValidators();
  const [split, setSplit] = useState(true);

  const [montoTransaccion, setMontoTransaccion] = useState();
  const user = useSelector((state) => state.users.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    NewTransaccion({
      id_usuario: user.id,
      monto_transaccion: montoTransaccion,
    });
  };

  const handleApuestas = () => {
    setSplit(false);
  };

  const handleRifas = () => {
    setSplit(true);
  };

  return (
    <div className="container-dash">
      <div className="info-user-dash">
        <InfoUser />
      </div>
      <div className="info-rifas-dash">
        <div className="buttons-split">
          <button className="button rifa" onClick={handleRifas}>
            Rifas
          </button>
          <button className="button apuesta" onClick={handleApuestas}>
            Apuestas{" "}
          </button>
        </div>
        {isUserRolOrganizador() && (
          <div className="recarga">
            {split ? <h2>Tus Rifas</h2> : <h2>Tus Apuestas</h2>}
          </div>
        )}
        {isUserRolParticipante() && (
          <div className="recarga">
            {split ? <h2>Rifas Disponibles</h2> : <h2>Apuestas Disponibles</h2>}
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

        {split ? <ListRifas /> : <ListApuestas />}
      </div>
    </div>
  );
};
