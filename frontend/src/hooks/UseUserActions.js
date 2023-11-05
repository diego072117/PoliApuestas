import { useDispatch } from "react-redux";
import { registerUserAsync } from "../store/users/slice"; // Cambia a registerUserAsync

export const UseUserActions = () => {
  const dispatch = useDispatch();

  const NewUser = (userData) => {
    dispatch(registerUserAsync(userData)); // Usa registerUserAsync para la lógica asincrónica
  };

  return { NewUser };
};
