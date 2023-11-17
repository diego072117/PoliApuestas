// participanteRifaSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  participantes: [],
  status: "idle",
  error: null,
  mensaje: null,
};

export const registrarParticipanteAsync = createAsyncThunk(
  "participanteRifa/registrarParticipante",
  async (participanteData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Participantes/CreateParticipante",
        participanteData
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.mensaje);
    }
  }
);

export const obtenerParticipantesPorRifaAsync = createAsyncThunk(
  "participanteRifa/obtenerParticipantesPorRifa",
  async (idRifa) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Participantes/InfoParticipantes/${idRifa}`
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const participanteRifaSlice = createSlice({
  name: "participanteRifa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registrarParticipanteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registrarParticipanteAsync.fulfilled, (state) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Compra realizda",
          text: "Ahora estas participando en esta rifa.",
        }).then(() => {
          window.location.reload();
        });
      })
      .addCase(registrarParticipanteAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.mensaje = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: action.error.message,
        });
      })
      .addCase(obtenerParticipantesPorRifaAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(obtenerParticipantesPorRifaAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.participantes = action.payload;
      })
      .addCase(obtenerParticipantesPorRifaAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default participanteRifaSlice.reducer;
export const {} = participanteRifaSlice.actions;
