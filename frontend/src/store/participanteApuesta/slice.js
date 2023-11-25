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

export const registrarParticipanteApuestaAsync = createAsyncThunk(
  "participanteApuesta/registrarParticipanteApuesta",
  async (participanteData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/ParticipantesApuesta/CreateParticipanteApuesta",
        participanteData
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.mensaje);
    }
  }
);

export const obtenerParticipantesPorApuestaAsync = createAsyncThunk(
  "participanteApuesta/obtenerParticipantesPorApuesta",
  async (idApuesta) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/ParticipantesApuesta/InfoParticipantesApuesta/${idApuesta}`
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const participanteApuestaSlice = createSlice({
  name: "participanteRifa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registrarParticipanteApuestaAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registrarParticipanteApuestaAsync.fulfilled, (state) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Compra realizda",
          text: "Ahora estas participando en esta apuesta.",
        }).then(() => {
          window.location.reload();
        });
      })
      .addCase(registrarParticipanteApuestaAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.mensaje = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: action.error.message,
        });
      })
      .addCase(obtenerParticipantesPorApuestaAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        obtenerParticipantesPorApuestaAsync.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.participantes = action.payload;
        }
      )
      .addCase(
        obtenerParticipantesPorApuestaAsync.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export default participanteApuestaSlice.reducer;
