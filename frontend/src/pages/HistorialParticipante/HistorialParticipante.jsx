import { useSelector } from "react-redux";
import { InfoUser } from "../../components/InfoUser/InfoUser";
import { useHistorialActions } from "../../hooks/useHistorialActions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Dasboard/Module.scss";

export const HistorialParticipante = () => {
  const user = useSelector((state) => state.users.auth.user);
  const historial = useSelector(
    (state) => state.historial.historialParticipante
  );
  const historialApuesta = useSelector(
    (state) => state.historial.historialParticipanteApuesta
  );
  const [split, setSplit] = useState(true);
  const { historialParticipante, historialParticipanteApuesta } =
    useHistorialActions();

  useEffect(() => {
    historialParticipante(user.id);
    historialParticipanteApuesta(user.id);
  }, []);

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
        <div className="container-rifas">
          <div className="buttons-split">
            <button className="button rifa" onClick={handleRifas}>
              Rifas
            </button>
            <button className="button apuesta" onClick={handleApuestas}>
              Apuestas{" "}
            </button>
          </div>
          <div className="recarga">
            {split ? <h2>Historial Rifas</h2> : <h2>Historial Apuestas</h2>}
          </div>
          {split
            ? historial.map((histo) => (
                <Link
                  to={`/detallesRifa/${histo.historialRifa.id}`}
                  className="card-rifa"
                  key={histo.historialRifa.id}
                >
                  <div className="rifa">
                    <div className="info-list">
                      <h2 className="title-rifa">
                        {histo.historialRifa.nombreRifa}
                      </h2>
                      <p className="creador">
                        {histo.usuarioCreador.name}{" "}
                        {histo.usuarioCreador.lastName}
                      </p>
                    </div>
                    <div className="boleta">
                      <i className="fa-solid fa-money-bill"></i>
                      <p className="costo-boleta">
                        {histo.historialRifa.valorBoleta}
                      </p>
                    </div>
                  </div>
                  <div className="date-rifa">
                    <p>{histo.historialRifa.estado}</p>
                  </div>
                </Link>
              ))
            : historialApuesta.map((histo) => (
                <Link
                  to={`/detallesApuesta/${histo.historialApuesta.id}`}
                  className="card-rifa"
                  key={histo.historialApuesta.id}
                >
                  <div className="rifa">
                    <div className="info-list">
                      <h2 className="title-rifa">
                        {histo.historialApuesta.nombreApuesta}
                      </h2>
                      <p className="creador">
                        {histo.usuarioCreador.name}{" "}
                        {histo.usuarioCreador.lastName}
                      </p>
                    </div>
                    <div className="boleta">
                      <i className="fa-solid fa-money-bill"></i>
                      <p className="costo-boleta">
                        {histo.historialApuesta.montoMinimo} -{" "}
                        {histo.historialApuesta.montoMaximo}
                      </p>
                    </div>
                  </div>
                  <div className="date-rifa">
                    <p>{histo.historialApuesta.estado}</p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};
