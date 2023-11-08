import { useEffect } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ListRifas = () => {
  const rifas = useSelector((state) => state.rifas.rifas);

  const { listRifas } = useRifaActions();
  useEffect(() => {
    listRifas();
  }, []);

 
  return (
    <div>
      <h2>Lista de Rifas</h2>
      {rifas.map((rifa) => (
        <div key={rifa.id}>
          <p>{rifa.nombreRifa}</p>
          <Link to={`/detallesRifa/${rifa.id}`}>Detalles</Link> 
        </div>
      ))}
    </div>
  );
};
