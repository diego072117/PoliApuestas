import { useState } from "react";
import { useSelector } from "react-redux";
import { useApuestaActions } from "../../hooks/useApuestaActions";

export const Apuestas = () => {
  const user = useSelector((state) => state.users.auth.user);
  const { createApuesta } = useApuestaActions();
  const [formData, setFormData] = useState({
    id_usuarioCreador: user.id,
    nombreApuesta: "",
    tipoDeporte: "",
    equipoUno: "",
    equipoDos: "",
    monto: "",
    equipoGanador: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createApuesta(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container-create-rifa">
      <div className="create-rifa">
        <div className="title-create-rifa">
          <h2>Crear Apuesta</h2>
        </div>

        <form onSubmit={handleSubmit} className="form-create-rifa">
          <div className="container-cols-create-rifa">
            <label>Nombre de la Apuesta:</label>
            <input
              type="text"
              name="nombreApuesta"
              value={formData.nombreApuesta}
              onChange={handleInputChange}
              className="form-input"
            />
            <label>Deporte:</label>
            <input
              type="text"
              name="tipoDeporte"
              value={formData.tipoDeporte}
              onChange={handleInputChange}
              className="form-input"
            />
            <label>Equipo uno:</label>
            <input
              type="text"
              name="equipoUno"
              value={formData.equipoUno}
              onChange={handleInputChange}
              className="form-input"
            />

            <label>Equipo dos:</label>
            <input
              type="text"
              name="equipoDos"
              value={formData.equipoDos}
              onChange={handleInputChange}
              className="form-input"
            />

            <label>Monto:</label>
            <input
              type="number"
              name="monto"
              value={formData.monto}
              onChange={handleInputChange}
              className="form-input"
            />
            <button className="button-create-rifa" type="submit">
              Crear Rifa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
