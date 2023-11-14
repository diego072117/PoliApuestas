import { useSelector } from "react-redux";
import { InfoUser } from "../../components/InfoUser/InfoUser";
import { useHistorialActions } from "../../hooks/useHistorialActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Dasboard/Module.scss";

export const HistorialParticipante = () => {
  const user = useSelector((state) => state.users.auth.user);
  const historial = useSelector(
    (state) => state.historial.historialParticipante
  );
  const { historialParticipante } = useHistorialActions();

  useEffect(() => {
    historialParticipante(user.id);
  }, []);
  return (
    <div className="container-dash">
      <div className="info-user-dash">
        <InfoUser />
      </div>
      <div className="info-rifas-dash">
        <div className="container-rifas">
          {historial.map((histo) => (
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
                    {histo.usuarioCreador.name} {histo.usuarioCreador.lastName}
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
          ))}
        </div>
      </div>
    </div>
  );
};
