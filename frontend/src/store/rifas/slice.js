import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  rifas: [],
  rifaById: null,
  status: "idle",
  error: null,
};

export const createRifaAsync = createAsyncThunk(
  "rifa/createRifa",
  async (rifaData,{dispatch}) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Rifa/CreateRifa",
        rifaData
      );
      await dispatch(listRifasAsync())
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const listRifasAsync = createAsyncThunk("rifas/listRifas", async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/Rifa/GetAllRifas"
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const listRifaByIdAsync = createAsyncThunk("rifa/listRifa    ", async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Rifa/GetRifa/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  });

const rifaSlice = createSlice({
  name: "rifas",
  initialState,
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
      })
      .addCase(listRifasAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listRifasAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rifas = action.payload;
      })
      .addCase(listRifasAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(listRifaByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listRifaByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rifaById = action.payload;
      })
      .addCase(listRifaByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      
  },
});

export default rifaSlice.reducer;
