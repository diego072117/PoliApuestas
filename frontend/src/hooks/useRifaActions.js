import { useDispatch } from "react-redux";
import { createRifaAsync, listRifaByIdAsync, listRifasAsync } from "../store/rifas/slice";
import { useNavigate } from "react-router-dom";

export const useRifaActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createRifa = (rifaData) => {
    dispatch(createRifaAsync(rifaData));
  };
  const listRifas = () => {
    dispatch(listRifasAsync());
  };

  const getRifaById = (id) => {
    dispatch(listRifaByIdAsync(id));
  };

  return {
    createRifa,
    listRifas,
    getRifaById,
  };
};
