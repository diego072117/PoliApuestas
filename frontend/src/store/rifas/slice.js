import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  rifas: [],
  rifasCreador: [],
  boletasDisponibles: [],
  rifaById: null,
  status: "idle",
  error: null,
  mensaje: null,
};

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

export const listRifaByIdAsync = createAsyncThunk(
  "rifa/listRifaById",
  async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Rifa/GetRifa/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const listRifasUsuarioCreadorAsync = createAsyncThunk(
  "rifa/listRifaUsuarioCreador",
  async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Rifa/GetAllRifasUsuarioCreador/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getBoletasDisponiblesAsync = createAsyncThunk(
  "rifas/getBoletasDisponibles",
  async (idRifa) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Rifa/GetBoletasDisponibles/${idRifa}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const seleccionarGanadoresAsync = createAsyncThunk(
  "rifas/seleccionarGanadores",
  async (idRifa) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/Rifa/SeleccionarGanadores/${idRifa}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.mensaje);
    }
  }
);

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
        }).then(() => {
          window.location.href = "/dashboard";
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
      .addCase(listRifasUsuarioCreadorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listRifasUsuarioCreadorAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rifasCreador = action.payload;
      })
      .addCase(listRifasUsuarioCreadorAsync.rejected, (state, action) => {
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
      })
      .addCase(getBoletasDisponiblesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBoletasDisponiblesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.boletasDisponibles = action.payload;
      })
      .addCase(getBoletasDisponiblesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(seleccionarGanadoresAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(seleccionarGanadoresAsync.fulfilled, (state) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Ganadores seleccionados exitosamente",
          text: "Los ganadores se han seleccionado exitosamente.",
        }).then(() => {
          window.location.reload();
        });
      })
      .addCase(seleccionarGanadoresAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.mensaje = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: action.error.message,
        });
      });
  },
});

export default rifaSlice.reducer;
