import { useState } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";
import "./Module.scss";

export const Rifa = () => {
  const user = useSelector((state) => state.users.auth.user);
  const { createRifa } = useRifaActions();
  const [formData, setFormData] = useState({
    nombreRifa: "",
    descripcion: "",
    id_usuarioCreador: user.id,
    boletasTotales: "",
    valorBoleta: "",
    primerPremio: null,
    segundoPremio: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== undefined) {
        formDataToSend.append(key, formData[key]);
      }
    }

    createRifa(formDataToSend);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  return (
    <div className="container-create-rifa">
      <div className="create-rifa">
        <div className="title-create-rifa">
          <h2>Crear rifa</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="form-create-rifa"
        >
          <div className="container-cols-create-rifa">
            <label>Nombre de la Rifa:</label>
            <input
              type="text"
              name="nombreRifa"
              value={formData.nombreRifa}
              onChange={handleInputChange}
              className="form-input"
            />
            <label>Descripción:</label>
            <input
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              className="form-input"
            />
            <label>Boletas Totales:</label>
            <input
              type="number"
              name="boletasTotales"
              value={formData.boletasTotales}
              onChange={handleInputChange}
              className="form-input"
            />

            <label>Valor de Boleta:</label>
            <input
              type="number"
              name="valorBoleta"
              value={formData.valorBoleta}
              onChange={handleInputChange}
              className="form-input"
            />
            <label>Primer Premio:</label>
            <input
              type="file"
              name="primerPremio"
              onChange={handleFileChange}
              className="form-input"
            />
            <label>Segundo Premio:</label>
            <input
              type="file"
              name="segundoPremio"
              onChange={handleFileChange}
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
