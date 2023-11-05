import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

// Define una función asincrónica para registrar un usuario
export const registerUserAsync = createAsyncThunk(
  "users/registerUser",
  async (userData) => {
    try {
      // Realiza la solicitud HTTP al backend para registrar al usuario
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

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
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
      });
  },
});

export default usersSlice.reducer;
