import { useDispatch } from "react-redux";
import { createRifaAsync, getBoletasDisponiblesAsync, listRifaByIdAsync, listRifasAsync } from "../store/rifas/slice";

export const useRifaActions = () => {
  const dispatch = useDispatch();

  const createRifa = (rifaData) => {
    dispatch(createRifaAsync(rifaData));
  };
  const listRifas = () => {
    dispatch(listRifasAsync());
  };

  const getRifaById = (id) => {
    dispatch(listRifaByIdAsync(id));
  };

  const getBoletasDisponibles = (idRifa) => {
    dispatch(getBoletasDisponiblesAsync(idRifa));
  };

  return {
    createRifa,
    listRifas,
    getRifaById,
    getBoletasDisponibles,
  };
};
