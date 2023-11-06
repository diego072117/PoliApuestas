import { useDispatch } from "react-redux";
import { registerUserAsync, loginUserAsync, logout } from "../store/users/slice"; 

export const UseUserActions = () => {
  const dispatch = useDispatch();

  const NewUser = (userData) => {
    dispatch(registerUserAsync(userData)); 
  };

  const LoginUser = (userData) => {
    dispatch(loginUserAsync(userData));
  };

  const LogoutUser = () => {
    dispatch(logout()); // Llama a la acción para cerrar la sesión
  };

  return { NewUser, LoginUser, LogoutUser };
};
