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
    primerPremio: "",
    segundoPremio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createRifa(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <h2>Crear Nueva Rifa</h2>
      <form onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="primerPremio"
            value={formData.primerPremio}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Segundo Premio:</label>
          <input
            type="text"
            name="segundoPremio"
            value={formData.segundoPremio}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Crear Rifa</button>
      </form>
    </div>
  );
};
