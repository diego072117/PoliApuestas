import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  apuestas: [],
  apuestasCreador: [],
  apuestasById: null,
  status: "idle",
  error: null,
  mensaje: null,
};

export const createApuestaAsync = createAsyncThunk(
  "apuesta/createApuesta",
  async (apuestaData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Apuestas/CreateApuesta",
        apuestaData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const listApuestasAsync = createAsyncThunk(
  "apuesta/listaApuesta",
  async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Apuestas/GetAllApuestas"
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const listApuestaByIdAsync = createAsyncThunk(
  "apuesta/listApuestaById",
  async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Apuestas/GetApuesta/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const listApuestasUsuarioCreadorAsync = createAsyncThunk(
  "apuesta/listApuestasUsuarioCreador",
  async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Apuestas/GetAllApuestasUsuarioCreador/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const apuestaSlice = createSlice({
  name: "apuestas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createApuestaAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createApuestaAsync.fulfilled, (state) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Apuesta creada exitosamente",
          text: "La apuesta se ha registrado exitosamente.",
        });
      })
      .addCase(createApuestaAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al crear la apuesta.",
        });
      })
      .addCase(listApuestasAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listApuestasAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apuestas = action.payload;
      })
      .addCase(listApuestasAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(listApuestasUsuarioCreadorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listApuestasUsuarioCreadorAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apuestasCreador = action.payload;
      })
      .addCase(listApuestasUsuarioCreadorAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(listApuestaByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listApuestaByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apuestasById = action.payload;
      })
      .addCase(listApuestaByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apuestaSlice.reducer;
