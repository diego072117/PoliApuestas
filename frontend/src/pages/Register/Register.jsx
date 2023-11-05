import React, { useState } from "react";
import { UseUserActions } from "../../hooks/UseUserActions";

export const Register = () => {
  const { NewUser } = UseUserActions();

  const [formData, setFormData] = useState({
    tipoDocumento: "CC",
    numeroDocumento: "",
    nombre: "",
    correo: "",
    rol: "normal",
    telefono: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    NewUser(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo Documento:</label>
          <select
            name="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleInputChange}
          >
            <option value="CC">CC</option>
            <option value="TI">TI</option>
          </select>
        </div>
        <div>
          <label>Número de documento:</label>
          <input
            type="number"
            name="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Nombre completo:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Rol:</label>
          <select name="rol" value={formData.rol} onChange={handleInputChange}>
            <option value="normal">Normal</option>
            <option value="organizador">Organizador</option>
          </select>
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="number"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
