import { useEffect } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Importa useParams para acceder a los parámetros de la URL

export const DetallesRifa = () => {
  const { id } = useParams();
  const { getRifaById } = useRifaActions();
  const rifa = useSelector((state) => state.rifas.rifaById);

  useEffect(() => {
    getRifaById(id);
  }, [id]);

  return (
    <div>
      <h2>Detalles de la Rifa</h2>
      {rifa && (
        <div>
          <p>ID: {rifa.id}</p>
          <p>Nombre: {rifa.nombreRifa}</p>
        </div>
      )}
    </div>
  );
};
