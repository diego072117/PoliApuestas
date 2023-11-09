import { useEffect } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Importa useParams para acceder a los parámetros de la URL

export const DetallesRifa = () => {
  const { id } = useParams();
  const { getRifaById, getBoletasDisponibles } = useRifaActions();
  const rifa = useSelector((state) => state.rifas.rifaById);
  const boletasDisponibles = useSelector(
    (state) => state.rifas.boletasDisponibles
  );

  useEffect(() => {
    getRifaById(id);
    getBoletasDisponibles(id);
  }, [id]);

  return (
    <div>
      <h2>Detalles de la Rifa</h2>
      {rifa && (
        <div>
          <p>ID: {rifa.id}</p>
          <p>Nombre: {rifa.nombreRifa}</p>
          <p>Boletas Disponibles:</p>
          <select>
            <option>Elije el numero de tu boleta</option>
            {boletasDisponibles.map((numeroBoleta) => (
              <option key={numeroBoleta} value={numeroBoleta}>
                {numeroBoleta}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
