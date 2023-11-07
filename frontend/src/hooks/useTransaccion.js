import { useDispatch } from "react-redux";
import { createTransactionAsync } from "../store/transaccion/slice";

export const useTransaccion = () => {
  const dispatch = useDispatch();

  const NewTransaccion = (transaccionData) => {
    dispatch(createTransactionAsync(transaccionData));
  };

  return { NewTransaccion };
};
