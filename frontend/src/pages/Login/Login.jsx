import React, { useEffect, useState } from "react";
import { UseUserActions } from "../../hooks/UseUserActions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {
  const { LoginUser } = UseUserActions();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginUser(formData);
    setFormData({ email: "", password: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const user = useSelector((state) => state.users.auth.access_token);
  useEffect(() => {
    if (user != false) {
      console.log("Redirigiendo al dashboard");
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
