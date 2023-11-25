import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useParticipanteApuestaActions } from "../../hooks/useParticipanteApuestaActios";
import { useValidators } from "../../hooks/useValidations";
import { useApuestaActions } from "../../hooks/useApuestaActions";
import Swal from "sweetalert2";

export const DetallesApuesta = () => {
  const { id } = useParams();
  const apuesta = useSelector((state) => state.apuestas.apuestasById);
  const user = useSelector((state) => state.users.auth.user);
  const participanteApuesta = useSelector(
    (state) => state.participanteApuesta.participantes
  );
  const [selectedEquipo, setSelectedEquipo] = useState("");
  const [equipoGanador, setEquipoGandor] = useState("");
  const { getApuestaById } = useApuestaActions();
  const { obtenerParticipantesPorApuesta, registrarParticipanteApuesta } =
    useParticipanteApuestaActions();
  const { seleccionarGanadoresApuesta } = useApuestaActions();
  const { isUserRolParticipante, isUserRolOrganizador } = useValidators();

  useEffect(() => {
    getApuestaById(id);
    obtenerParticipantesPorApuesta(id);
  }, [id]);

  const handleRegistroParticipante = () => {
    if (selectedEquipo) {
      const participanteData = {
        id_usuario: user.id,
        id_apuesta: id,
        equipoApostado: selectedEquipo,
      };

      registrarParticipanteApuesta(participanteData);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Elije equipo y apuesta por el",
      });
    }
  };

  const handleSeleccionarGanadores = () => {
    const dataGanador = {
      id_apuesta: id,
      equipoGanador: equipoGanador,
    };
    seleccionarGanadoresApuesta(dataGanador);
  };


  return (
    <div className="container-details">
      {apuesta && (
        <div className="details-rifa">
          <div className="header-details">
            <h2 className="title-daails">Informacion de la Apuesta</h2>
          </div>
          <div className="info-rifa-container">
            <div className="info-rifa-details">
              <p>
                Apuesta:
                <span className="text-info-rifa">{apuesta.nombreApuesta}</span>
              </p>
              <p>
                Deporte:
                <span className="text-info-rifa">{apuesta.tipoDeporte}</span>
              </p>
              <p>
                Equipo uno:
                <span className="text-info-rifa">{apuesta.equipoUno}</span>
              </p>
              <p>
                Equipo dos:
                <span className="text-info-rifa">{apuesta.equipoDos}</span>
              </p>

              <p>
                Monto:
                <span className="text-info-rifa">{apuesta.monto}</span>
              </p>
              <p>
                Equipo ganador:
                <span className="text-info-rifa">
                  {apuesta.equipoGanador
                    ? apuesta.equipoGanador
                    : "Por definir"}
                </span>
              </p>
            </div>
            <div className="info-creador-details">
              <p>
                Organizador:
                <span className="text-info-rifa">
                  {apuesta.usuarioCreador.name}
                </span>
              </p>
              <p>
                Telefono:
                <span className="text-info-rifa">
                  {apuesta.usuarioCreador.telefono}
                </span>
              </p>
              <p>
                Email:
                <span className="text-info-rifa">
                  {apuesta.usuarioCreador.email}
                </span>
              </p>
              <p>
                Numero Documento:
                <span className="text-info-rifa">
                  {apuesta.usuarioCreador.numeroDocumento}
                </span>
              </p>
              <p>
                Tipo Documento:
                <span className="text-info-rifa">
                  {apuesta.usuarioCreador.tipoDocumento}
                </span>
              </p>
            </div>
          </div>
          {isUserRolParticipante() && !apuesta.equipoGanador && (
            <div className="apostar-por">
              <p>Seleccione el equipo:</p>
              <select
                value={selectedEquipo}
                onChange={(e) => setSelectedEquipo(e.target.value)}
              >
                <option>Selecciona un equipo</option>
                <option value={apuesta.equipoUno}>{apuesta.equipoUno}</option>
                <option value={apuesta.equipoDos}>{apuesta.equipoDos}</option>
              </select>
              <button onClick={handleRegistroParticipante}>Apostar</button>
            </div>
          )}
          {isUserRolOrganizador() && !apuesta.equipoGanador && (
            <div className="equipo-ganador">
              <p>Equipo ganador:</p>
              <select
                value={equipoGanador}
                onChange={(e) => setEquipoGandor(e.target.value)}
              >
                <option>Selecciona un equipo</option>
                <option value={apuesta.equipoUno}>{apuesta.equipoUno}</option>
                <option value={apuesta.equipoDos}>{apuesta.equipoDos}</option>
              </select>
              <button onClick={handleSeleccionarGanadores}>Ganador</button>
            </div>
          )}
        </div>
      )}

      {participanteApuesta && (
        <div className="details-rifa">
          <div className="header-details">
            <h2 className="title-daails">Participantes </h2>
            <h2>Apostado</h2>
          </div>
          <div className="scroll-participantes">
            {participanteApuesta.map((participante) => (
              <div className="participantes-rifa" key={participante.id}>
                <div className="info-participant">
                  <p>
                    {participante.usuarioParticipante.name}{" "}
                    {participante.usuarioParticipante.lastName}
                  </p>
                  <p># {participante.equipoApostado}</p>
                </div>
                <div className="documet-participant">
                  <p>{participante.usuarioParticipante.numeroDocumento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
