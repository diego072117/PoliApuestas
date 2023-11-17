import { useState } from "react";
import { useRifaActions } from "../../hooks/useRifaActions";
import { useSelector } from "react-redux";

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
    <div>
      <h2>Crear Nueva Rifa</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Nombre de la Rifa:</label>
          <input
            type="text"
            name="nombreRifa"
            value={formData.nombreRifa}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Descripción:</label>
          <input
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Boletas Totales:</label>
          <input
            type="number"
            name="boletasTotales"
            value={formData.boletasTotales}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Valor de Boleta:</label>
          <input
            type="number"
            name="valorBoleta"
            value={formData.valorBoleta}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Primer Premio:</label>
          <input type="file" name="primerPremio" onChange={handleFileChange} />
        </div>

        <div>
          <label>Segundo Premio:</label>
          <input type="file" name="segundoPremio" onChange={handleFileChange} />
        </div>

        <button type="submit">Crear Rifa</button>
      </form>
    </div>
  );
};
