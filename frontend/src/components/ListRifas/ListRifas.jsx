import { useEffect } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Module.scss";

export const ListRifas = () => {
  const rifas = useSelector((state) => state.rifas.rifas);
  console.log(rifas);

  const { listRifas } = useRifaActions();
  useEffect(() => {
    listRifas();
  }, []);

  return (
    <div className="container-rifas">
      {rifas.map((rifa) => (
        <Link
          to={`/detallesRifa/${rifa.id}`}
          className="card-rifa"
          key={rifa.id}
        >
          <div className="rifa">
            <div className="info-list">
              <h2 className="title-rifa">{rifa.nombreRifa}</h2>
              <p className="creador">Juliana Melo</p>
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

      {/* {rifas.map((rifa) => (
        <div key={rifa.id}>
          <p>{rifa.nombreRifa}</p>
          <Link to={`/detallesRifa/${rifa.id}`}>Detalles</Link> 
        </div>
      ))} */}
    </div>
  );
};
