// useParticipanteRifaActions.js
import { useDispatch } from "react-redux";
import {
  createApuestaAsync,
  listApuestaByIdAsync,
  listApuestasAsync,
  listApuestasUsuarioCreadorAsync,
  seleccionarGanadoresAsync,
} from "../store/apuesta/slice";

export const useApuestaActions = () => {
  const dispatch = useDispatch();

  const createApuesta = (apuestaData) => {
    dispatch(createApuestaAsync(apuestaData));
  };

  const listApuestas = () => {
    dispatch(listApuestasAsync());
  };

  const listApuestasUsuCreador = (id) => {
    dispatch(listApuestasUsuarioCreadorAsync(id));
  };

  const getApuestaById = (id) => {
    dispatch(listApuestaByIdAsync(id));
  };

  const seleccionarGanadoresApuesta = (dataGanador) =>{
    dispatch(seleccionarGanadoresAsync(dataGanador))
  }

  return {
    createApuesta,
    listApuestas,
    listApuestasUsuCreador,
    getApuestaById,
    seleccionarGanadoresApuesta
  };
};
