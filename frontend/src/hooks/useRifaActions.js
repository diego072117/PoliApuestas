import { useDispatch } from "react-redux";
import {
  createRifaAsync,
  getBoletasDisponiblesAsync,
  listRifaByIdAsync,
  listRifasAsync,
  listRifasUsuarioCreadorAsync,
  seleccionarGanadoresAsync,
} from "../store/rifas/slice";

export const useRifaActions = () => {
  const dispatch = useDispatch();

  const createRifa = (rifaData) => {
    dispatch(createRifaAsync(rifaData));
  };
  const listRifas = () => {
    dispatch(listRifasAsync());
  };
  const listRifasUsuCreador = (id) => {
    dispatch(listRifasUsuarioCreadorAsync(id));
  };

  const getRifaById = (id) => {
    dispatch(listRifaByIdAsync(id));
  };

  const getBoletasDisponibles = (idRifa) => {
    dispatch(getBoletasDisponiblesAsync(idRifa));
  };

  const seleccionarGanadores = (idRifa) => {
    dispatch(seleccionarGanadoresAsync(idRifa));
  };

  return {
    createRifa,
    listRifas,
    getRifaById,
    getBoletasDisponibles,
    listRifasUsuCreador,
    seleccionarGanadores,
  };
};
