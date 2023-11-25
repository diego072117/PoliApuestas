import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  historialParticipante: [],
  historialParticipanteApuesta: [],
  status: "idle",
  error: null,
};

export const historialParticipanteAsync = createAsyncThunk(
  "rifa/historialParticipante",
  async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Participantes/HistorialUsurio/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const historialParticipanteApuestaAsync = createAsyncThunk(
  "rifa/historialParticipanteApuesta",
  async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/ParticipantesApuesta/HistorialApuestasUsurio/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const historialParticipanteSlice = createSlice({
  name: "historial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(historialParticipanteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(historialParticipanteAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.historialParticipante = action.payload;
      })
      .addCase(historialParticipanteAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(historialParticipanteApuestaAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(historialParticipanteApuestaAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.historialParticipanteApuesta = action.payload;
      })
      .addCase(historialParticipanteApuestaAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default historialParticipanteSlice.reducer;
