// useParticipanteRifaActions.js

import { useDispatch } from "react-redux";
import { registrarParticipanteAsync } from "../store/participanteRifa/slice";


export const useParticipanteRifaActions = () => {
  const dispatch = useDispatch();

  const registrarParticipante = (participanteData) => {
    dispatch(registrarParticipanteAsync(participanteData));
  };

  return {
    registrarParticipante,
  };
};
