import React, { useState } from "react";
import { UseUserActions } from "../../hooks/UseUserActions";
import "./Module.scss";

export const Register = () => {
  const { NewUser } = UseUserActions();

  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    tipoDocumento: "CC",
    numeroDocumento: "",
    email: "",
    rol: "participante",
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
    <div className="container-register">
      <div className="register">
        <div className="info-login">
          <i className="fa-solid fa-earth-americas"></i>
          <h2>Sign up to PoliApuestas</h2>
        </div>
        <form onSubmit={handleSubmit} className="form-register">
          <div className="container-cols">
            <div className="col-one">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-register"
              />

              <label>Segundo Nombre:</label>
              <input
                type="text"
                name="secondName"
                value={formData.secondName}
                onChange={handleInputChange}
                className="input-register"
              />
              <label>Tipo Documento:</label>
              <select
                name="tipoDocumento"
                value={formData.tipoDocumento}
                onChange={handleInputChange}
                className="input-register"
              >
                <option value="CC">CC</option>
                <option value="TI">TI</option>
              </select>

              <label>Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-register"
              />
              <label>Rol:</label>
              <select
                name="rol"
                value={formData.rol}
                onChange={handleInputChange}
                className="input-register"
              >
                <option value="participante">Participante</option>
                <option value="organizador">Organizador</option>
              </select>
            </div>
            <div className="col-two">
              <label>Apellido:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="input-register"
              />

              <label>Segundo Apellido</label>
              <input
                type="text"
                name="secondLastName"
                value={formData.secondLastName}
                onChange={handleInputChange}
                className="input-register"
              />
              <label>Número de documento:</label>
              <input
                type="number"
                name="numeroDocumento"
                value={formData.numeroDocumento}
                onChange={handleInputChange}
                className="input-register"
              />
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input-register"
              />
              <label>Teléfono:</label>
              <input
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="input-register"
              />
            </div>
          </div>

          <button className="button-register" type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};
