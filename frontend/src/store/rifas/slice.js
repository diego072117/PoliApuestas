import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const createRifaAsync = createAsyncThunk(
  "rifa/createRifa",
  async (rifaData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Rifa/CreateRifa",
        rifaData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const rifaSlice = createSlice({
  name: "rifa",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRifaAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createRifaAsync.fulfilled, (state) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Rifa creada exitosamente",
          text: "La rifa se ha registrado exitosamente.",
        });
      })
      .addCase(createRifaAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al crear la rifa.",
        });
      });
  },
});

export default rifaSlice.reducer;
