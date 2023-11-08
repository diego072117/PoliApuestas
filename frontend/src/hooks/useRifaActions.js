import { useDispatch } from "react-redux";
import { createRifaAsync } from "../store/rifas/slice";


export const useRifaActions = () => {
  const dispatch = useDispatch();

  const createRifa = (rifaData) => {
    console.log(rifaData);
    dispatch(createRifaAsync(rifaData));
  };

  return {
    createRifa,
  };
};
