import { useDispatch } from "react-redux";
import {
  registerUserAsync,
  loginUserAsync,
  logout,
  updateUserAsync,
} from "../store/users/slice";
import { useNavigate } from "react-router-dom";

export const UseUserActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const NewUser = (userData) => {
    dispatch(registerUserAsync(userData));
  };

  const LoginUser = (userData) => {
    dispatch(loginUserAsync(userData));
  };

  const UpdateUser = (userData) => {
    dispatch(updateUserAsync(userData));
  };

  const LogoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  return { NewUser, LoginUser, LogoutUser, UpdateUser };
};
