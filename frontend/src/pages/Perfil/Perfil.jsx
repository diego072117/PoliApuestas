import { useSelector } from "react-redux";
import { useTransaccion } from "../../hooks/useTransaccion";
import { useState } from "react";

export const Perfil = () => {
  const { NewTransaccion } = useTransaccion();

  const [montoTransaccion, setMontoTransaccion] = useState(0);
  const user = useSelector((state) => state.users.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    NewTransaccion({
      id_usuario: user.id,
      monto_transaccion: montoTransaccion,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Monto de la transacción:</label>
      <input
        type="number"
        value={montoTransaccion}
        onChange={(e) => setMontoTransaccion(e.target.value)}
      />
      <button type="submit">Realizar Transacción</button>
    </form>
  );
};
