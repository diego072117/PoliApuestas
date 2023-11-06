import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

// Función para obtener la información de autenticación desde el Local Storage
const authLocal = () => {
  const authJSON = localStorage.getItem("auth");
  return authJSON ? JSON.parse(authJSON) : {access_token: false, user: null};
};

// Inicializa el estado usando la función authLocal
const initialState = {
  auth: authLocal(),
  status: "idle",
  error: null,
};

export const registerUserAsync = createAsyncThunk(
  "users/registerUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Users/CreateUser",
        userData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "users/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Users/Login",
        userData
      );
      const authData = {
        access_token: response.data.access_token,
        user: response.data.user,
      };
      localStorage.setItem("auth", JSON.stringify(authData));
      return authData; // Devuelve el objeto con el token y el usuario
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      // Restaura el estado a los valores iniciales
      state.auth = { access_token: false, user: null };
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "El usuario se ha registrado exitosamente.",
        });
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al registrar el usuario.",
        });
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.auth = action.payload;
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: "Has iniciado sesión exitosamente.",
        });
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Credenciales incorrectas. Inicio de sesión fallido.",
        });
      });
  },
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
