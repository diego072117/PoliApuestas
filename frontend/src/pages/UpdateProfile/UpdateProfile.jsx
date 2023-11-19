import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Module.scss";
import { UseUserActions } from "../../hooks/UseUserActions";

export const UpdateProfile = () => {
  const user = useSelector((state) => state.users.auth.user);
  const { UpdateUser } = UseUserActions();

  // Estado para las propiedades que pueden cambiar
  const [userData, setUserData] = useState({
    id: user.id,
    name: user.name || "",
    secondName: user.secondName || "",
    lastName: user.lastName || "",
    secondLastName: user.secondLastName || "",
    tipoDocumento: user.tipoDocumento || "",
    numeroDocumento: user.numeroDocumento || "",
    email: user.email || "",
    telefono: user.telefono || "",
  });

  // Función para manejar cambios en las propiedades que pueden cambiar
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdateUser = () => {
    UpdateUser(userData);
  };

  return (
    <div className="container-perfil">
      <div className="perfil">
        <div className="info-perfil">
          <div className="image-perfil">
            <img
              src="https://avatars.githubusercontent.com/u/107522367?v=4"
              alt=""
            />
          </div>
          <div className="container-cols-perfil">
            <div className="col-one-perfil">
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                defaultValue={userData.name}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Segundo nombre</label>
              <input
                type="text"
                name="secondName"
                defaultValue={userData.secondName}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Tipo Documetno</label>
              <input
                type="text"
                name="tipoDocumento"
                defaultValue={userData.tipoDocumento}
                onChange={handleInputChange}
                className="form-input"
                disabled
              />
              <label>Correo</label>
              <input
                type="text"
                name="email"
                defaultValue={userData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="col-two-perfil">
              <label>Apellido</label>
              <input
                type="text"
                name="lastName"
                defaultValue={userData.lastName}
                onChange={handleInputChange}
                className="form-input"
              />
              <label>Segundo Apellido</label>
              <input
                type="text"
                name="secondLastName"
                defaultValue={userData.secondLastName}
                onChange={handleInputChange}
                className="form-input"
              />

              <label># Documento</label>
              <input
                type="text"
                name="numeroDocumento"
                defaultValue={userData.numeroDocumento}
                onChange={handleInputChange}
                className="form-input"
                disabled
              />

              <label>Telefono</label>
              <input
                type="text"
                name="telefono"
                defaultValue={userData.telefono}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>
          <div className="rol">
            <label>Rol</label>
            <input
              type="text"
              name="rol"
              defaultValue={user.rol}
              disabled
              className="form-input"
            />
          </div>

          <button className="button-update" onClick={handleUpdateUser}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
