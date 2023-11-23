// useParticipanteRifaActions.js

import { useDispatch } from "react-redux";
import {
  obtenerParticipantesPorApuestaAsync,
  registrarParticipanteApuestaAsync,
} from "../store/participanteApuesta/slice";

export const useParticipanteApuestaActions = () => {
  const dispatch = useDispatch();

  const registrarParticipanteApuesta = (participanteData) => {
    dispatch(registrarParticipanteApuestaAsync(participanteData));
  };

  const obtenerParticipantesPorApuesta = (idApuesta) => {
    dispatch(obtenerParticipantesPorApuestaAsync(idApuesta));
  };

  return {
    registrarParticipanteApuesta,
    obtenerParticipantesPorApuesta,
  };
};
