import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

// Función para obtener la información de autenticación desde el Local Storage
const authLocal = () => {
  const authJSON = localStorage.getItem("auth");
  return authJSON ? JSON.parse(authJSON) : { access_token: false, user: null };
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

export const updateUserAsync = createAsyncThunk(
  "users/updateUser",
  async (userData, { getState }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/Users/UpdateUser/${userData.id}`,
        userData
      );
      const updatedUserData = response.data;

      // Actualizar localStorage con los nuevos datos del usuario
      const { access_token } = getState().users.auth;
      const authData = {
        access_token: access_token,
        user: { ...getState().users.auth.user, ...updatedUserData },
      };
      localStorage.setItem("auth", JSON.stringify(authData));

      return updatedUserData;
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
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "El usuario se ha registrado exitosamente.",
        }).then(() => {
          window.location.href = "/login";
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
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.auth.user = action.payload;
        Swal.fire({
          icon: "success",
          title: "Actualización exitosa",
          text: "El usuario se ha actualizado exitosamente.",
        });
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al actualizar el usuario.",
        });
      });
  },
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
