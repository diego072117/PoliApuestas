// useParticipanteRifaActions.js

import { useDispatch } from "react-redux";
import { historialParticipanteAsync } from "../store/HistorialParticipante/slice";

export const useHistorialActions = () => {
  const dispatch = useDispatch();

  const historialParticipante = (id) => {
    dispatch(historialParticipanteAsync(id));
  };

  return {
    historialParticipante,
  };
};
