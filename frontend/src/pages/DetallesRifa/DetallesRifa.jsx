import { useEffect, useState } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useParticipanteRifaActions } from "../../hooks/useParticipanteRifaActions";
import { useValidators } from "../../hooks/useValidations";
import Swal from "sweetalert2";
import "./Module.scss";

export const DetallesRifa = () => {
  const { id } = useParams();
  const rifa = useSelector((state) => state.rifas.rifaById);
  const user = useSelector((state) => state.users.auth.user);
  const { participantes, status } = useSelector(
    (state) => state.participanteRifa
  );
  const [numeroBoletaSeleccionada, setNumeroBoletaSeleccionada] = useState("");
  const { getRifaById, getBoletasDisponibles, seleccionarGanadores } =
    useRifaActions();
  const { isUserRolParticipante, isUserRolOrganizador } = useValidators();
  const { registrarParticipante, obtenerParticipantesPorRifa } =
    useParticipanteRifaActions();

  const boletasDisponibles = useSelector(
    (state) => state.rifas.boletasDisponibles
  );

  useEffect(() => {
    getRifaById(id);
    getBoletasDisponibles(id);
    obtenerParticipantesPorRifa(id);
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

  const handleSeleccionarGanadores = () => {
    seleccionarGanadores(id);
  };

  return (
    <div className="container-details">
      {rifa && (
        <div className="details-rifa">
          <div className="header-details">
            <h2 className="title-daails">Informacion de la rifa</h2>
            {isUserRolParticipante() && (
              <div className="boletas-disponibles">
                <p>Boletas Disponibles:</p>
                {boletasDisponibles && boletasDisponibles.length > 0 ? (
                  <div>
                    <select
                      className="form-input"
                      value={numeroBoletaSeleccionada}
                      onChange={(e) =>
                        setNumeroBoletaSeleccionada(e.target.value)
                      }
                    >
                      <option>Disponibles</option>
                      {boletasDisponibles.map((numeroBoleta) => (
                        <option key={numeroBoleta} value={numeroBoleta}>
                          {numeroBoleta}
                        </option>
                      ))}
                    </select>
                    <button
                      className="button-rifa-participant"
                      onClick={handleRegistroParticipante}
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Cargando..." : "Comprar"}
                    </button>
                  </div>
                ) : (
                  <p>Rifa llena. Todas las boletas han sido vendidas.</p>
                )}
              </div>
            )}
            {isUserRolOrganizador() &&
              !rifa.primerGanador &&
              !rifa.segundoGanador && (
                <button
                  className="button-rifa-participant"
                  onClick={handleSeleccionarGanadores}
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Cargando..."
                    : "Seleccionar Ganadores"}
                </button>
              )}
          </div>
          <div className="info-rifa-container">
            <div className="info-rifa-details">
              <p>
                Rifa:<span className="text-info-rifa">{rifa.nombreRifa}</span>
              </p>
              <p>
                Descripcion:
                <span className="text-info-rifa">{rifa.descripcion}</span>
              </p>
              <p>
                Costo por boleta:
                <span className="text-info-rifa">{rifa.valorBoleta}</span>
              </p>
              <p>
                Boleta ganadora:
                <span className="text-info-rifa">
                  # {rifa.primerGanador ? rifa.primerGanador : "Por definir"}
                </span>
              </p>
              <p>
                Boleta ganadora:
                <span className="text-info-rifa">
                  # {rifa.segundoGanador ? rifa.segundoGanador : "Por definir"}
                </span>
              </p>
            </div>
            <div className="info-creador-details">
              <p>
                Organizador:
                <span className="text-info-rifa">
                  {rifa.usuarioCreador.name}
                </span>
              </p>
              <p>
                Telefono:
                <span className="text-info-rifa">
                  {rifa.usuarioCreador.telefono}
                </span>
              </p>
              <p>
                Email:
                <span className="text-info-rifa">
                  {rifa.usuarioCreador.email}
                </span>
              </p>
              <p>
                Numero Documento:
                <span className="text-info-rifa">
                  {rifa.usuarioCreador.numeroDocumento}
                </span>
              </p>
              <p>
                Tipo Documento:
                <span className="text-info-rifa">
                  {rifa.usuarioCreador.tipoDocumento}
                </span>
              </p>
            </div>
          </div>
          <div className="premios-rifa">
            <div className="premio-one">
              <p>Primer premio:</p>
              <div className="container-img-premio">
                <img
                  className="premio-details"
                  src={`http://127.0.0.1:8000/storage/${rifa.primerPremio}`}
                  alt=""
                />
              </div>
            </div>
            <div className="premio-two">
              <p>Segundo premio:</p>
              <div className="container-img-premio">
                <img
                  className="premio-details"
                  src={`http://127.0.0.1:8000/storage/${rifa.segundoPremio}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {participantes && (
        <div className="details-rifa">
          <div className="header-details">
            <h2 className="title-daails">Participantes </h2>
            <h2>Boleta</h2>
          </div>
          <div className="scroll-participantes">
            {participantes.map((participante) => (
              <div className="participantes-rifa" key={participante.id}>
                <div className="info-participant">
                  <p>
                    {participante.usuarioParticipante.name}{" "}
                    {participante.usuarioParticipante.lastName}
                  </p>
                  <p># {participante.numeroBoleta}</p>
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
