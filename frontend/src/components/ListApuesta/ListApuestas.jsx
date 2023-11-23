import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useValidators } from "../../hooks/useValidations";
import { Link } from "react-router-dom";
import { useApuestaActions } from "../../hooks/useApuestaActions";

export const ListApuestas = () => {
  const apuestas = useSelector((state) => state.apuestas.apuestas);
  const apuestasCreador = useSelector(
    (state) => state.apuestas.apuestasCreador
  );
  const user = useSelector((state) => state.users.auth.user);
  const { isUserRolParticipante } = useValidators();
  const { listApuestas, listApuestasUsuCreador } = useApuestaActions();

  useEffect(() => {
    listApuestas();
    listApuestasUsuCreador(user.id);
  }, []);

  return (
    <div className="container-rifas">
      {isUserRolParticipante()
        ? apuestas.map((apuesta) => (
            <Link
              to={`/detallesApuesta/${apuesta.id}`}
              className="card-rifa"
              key={apuesta.id}
            >
              <div className="rifa">
                <div className="info-list">
                  <h2 className="title-rifa">{apuesta.nombreApuesta}</h2>
                  <p className="creador">
                    {apuesta.usuarioCreador.name}{" "}
                    {apuesta.usuarioCreador.lastName}
                  </p>
                </div>
                <div className="boleta">
                  <i className="fa-solid fa-money-bill"></i>
                  <p className="costo-boleta">{apuesta.montoMinimo} - {apuesta.montoMaximo}</p>
                </div>
              </div>
              <div className="date-rifa">
                <p>{apuesta.estado}</p>
              </div>
            </Link>
          ))
        : apuestasCreador.map((apuesta) => (
            <Link
              to={`/detallesApuesta/${apuesta.id}`}
              className="card-rifa"
              key={apuesta.id}
            >
              <div className="rifa">
                <div className="info-list">
                  <h2 className="title-rifa">{apuesta.nombreApuesta}</h2>
                  <p className="creador">Tu rifa</p>
                </div>
                <div className="boleta">
                  <i className="fa-solid fa-money-bill"></i>
                  <p className="costo-boleta">{apuesta.montoMaximo}</p>
                </div>
              </div>
              <div className="date-rifa">
                <p>{apuesta.estado}</p>
              </div>
            </Link>
          ))}
    </div>
  );
};
