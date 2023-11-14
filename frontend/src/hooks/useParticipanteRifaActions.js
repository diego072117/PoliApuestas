// useParticipanteRifaActions.js

import { useDispatch } from "react-redux";
import { obtenerParticipantesPorRifaAsync, registrarParticipanteAsync } from "../store/participanteRifa/slice";

export const useParticipanteRifaActions = () => {
  const dispatch = useDispatch();

  const registrarParticipante = (participanteData) => {
    dispatch(registrarParticipanteAsync(participanteData));
  };

  const obtenerParticipantesPorRifa = (idRifa) => {
    dispatch(obtenerParticipantesPorRifaAsync(idRifa));
  };

  return {
    registrarParticipante,
    obtenerParticipantesPorRifa,
  };
};
