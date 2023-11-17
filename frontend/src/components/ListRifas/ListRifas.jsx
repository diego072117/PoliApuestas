import { useEffect } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import { useValidators } from "../../hooks/useValidations";
import { Link } from "react-router-dom";

export const ListRifas = () => {
  const rifas = useSelector((state) => state.rifas.rifas);
  const rifasCreador = useSelector((state) => state.rifas.rifasCreador);
  const user = useSelector((state) => state.users.auth.user);
  const { isUserRolParticipante } = useValidators();
  const { listRifas, listRifasUsuCreador } = useRifaActions();

  useEffect(() => {
    listRifas();
    listRifasUsuCreador(user.id);
  }, []);

  return (
    <div className="container-rifas">
      {isUserRolParticipante()
        ? rifas.map((rifa) => (
            <Link
              to={`/detallesRifa/${rifa.id}`}
              className="card-rifa"
              key={rifa.id}
            >
              <div className="rifa">
                <div className="info-list">
                  <h2 className="title-rifa">{rifa.nombreRifa}</h2>
                  <p className="creador">
                    {rifa.usuarioCreador.name} {rifa.usuarioCreador.lastName}
                  </p>
                </div>
                <div className="boleta">
                  <i className="fa-solid fa-money-bill"></i>
                  <p className="costo-boleta">{rifa.valorBoleta}</p>
                </div>
              </div>
              <div className="date-rifa">
                <p>{rifa.estado}</p>
              </div>
            </Link>
          ))
        : rifasCreador.map((rifa) => (
            <Link
              to={`/detallesRifa/${rifa.id}`}
              className="card-rifa"
              key={rifa.id}
            >
              <div className="rifa">
                <div className="info-list">
                  <h2 className="title-rifa">{rifa.nombreRifa}</h2>
                  <p className="creador">
                    Tu rifa
                    {/* {rifa.usuarioCreador.name} {rifa.usuarioCreador.lastName} */}
                  </p>
                </div>
                <div className="boleta">
                  <i className="fa-solid fa-money-bill"></i>
                  <p className="costo-boleta">{rifa.valorBoleta}</p>
                </div>
              </div>
              <div className="date-rifa">
                <p>{rifa.estado}</p>
              </div>
            </Link>
          ))}
    </div>
  );
};
