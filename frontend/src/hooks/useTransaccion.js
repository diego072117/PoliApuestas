import { useDispatch } from "react-redux";
import {
  createTransactionAsync,
  getTransactionByIdAsync,
} from "../store/transaccion/slice";

export const useTransaccion = () => {
  const dispatch = useDispatch();

  const NewTransaccion = (transaccionData) => {
    dispatch(createTransactionAsync(transaccionData));
  };

  const getSaldoUser = (id) => {
    dispatch(getTransactionByIdAsync(id));
  };

  return { NewTransaccion, getSaldoUser };
};
