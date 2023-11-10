import { useEffect, useState } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Importa useParams para acceder a los parámetros de la URL
import { useParticipanteRifaActions } from "../../hooks/useParticipanteRifaActions";
import Swal from "sweetalert2";

export const DetallesRifa = () => {
  const { id } = useParams();
  const rifa = useSelector((state) => state.rifas.rifaById);
  const user = useSelector((state) => state.users.auth.user);
  const [numeroBoletaSeleccionada, setNumeroBoletaSeleccionada] = useState("");
  const { getRifaById, getBoletasDisponibles } = useRifaActions();
  const { registrarParticipante } = useParticipanteRifaActions();

  const boletasDisponibles = useSelector(
    (state) => state.rifas.boletasDisponibles
  );

  useEffect(() => {
    getRifaById(id);
    getBoletasDisponibles(id);
  }, [id]);

  const handleRegistroParticipante = () => {
    if (numeroBoletaSeleccionada) {
      const participanteData = {
        id_rifa: id,
        id_usuario: user.id,
        numeroBoleta: numeroBoletaSeleccionada,
      };

      registrarParticipante(participanteData);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Elije el numero de tu boleta",
      });
    }
  };

  return (
    <div>
      <h2>Detalles de la Rifa</h2>
      {rifa && (
        <div>
          <p>ID: {rifa.id}</p>
          <p>Nombre: {rifa.nombreRifa}</p>
          <p>Boletas Disponibles:</p>
          {boletasDisponibles && boletasDisponibles.length > 0 ? (
            <div>
              <select
                value={numeroBoletaSeleccionada}
                onChange={(e) => setNumeroBoletaSeleccionada(e.target.value)}
              >
                <option>Elije el numero de tu boleta</option>
                {boletasDisponibles.map((numeroBoleta) => (
                  <option key={numeroBoleta} value={numeroBoleta}>
                    {numeroBoleta}
                  </option>
                ))}
              </select>
              <button onClick={handleRegistroParticipante}>
                Registrar Participante
              </button>
            </div>
          ) : (
            <p>Rifa llena. Todas las boletas han sido vendidas.</p>
          )}
        </div>
      )}
    </div>
  );
};
