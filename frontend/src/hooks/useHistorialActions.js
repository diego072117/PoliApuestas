// useParticipanteRifaActions.js

import { useDispatch } from "react-redux";
import { historialParticipanteApuestaAsync, historialParticipanteAsync } from "../store/HistorialParticipante/slice";

export const useHistorialActions = () => {
  const dispatch = useDispatch();

  const historialParticipante = (id) => {
    dispatch(historialParticipanteAsync(id));
  };

  const historialParticipanteApuesta = (id) => {
    dispatch(historialParticipanteApuestaAsync(id));
  };

  return {
    historialParticipante,
    historialParticipanteApuesta,
  };
};
