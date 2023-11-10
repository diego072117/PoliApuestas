import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

// Define una acción asincrónica para realizar una transacción
export const createTransactionAsync = createAsyncThunk(
  "transactions/createTransaction",
  async (transaccionData) => {
    try {
      // Haz una solicitud POST al endpoint del backend
      const response = await axios.post(
        `http://127.0.0.1:8000/api/Transaccion/${transaccionData.id_usuario}`,
        { monto_transaccion: transaccionData.monto_transaccion }
      );
      
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTransactionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTransactionAsync.fulfilled, (state) => {
        state.status = "succeeded";
        Swal.fire({
          icon: "success",
          title: "Transaccion exitosa",
          text: "Cuenta recargada exitosamente.",
        });
        // Puedes realizar acciones adicionales aquí si es necesario
      })
      .addCase(createTransactionAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error con la transaccion.",
        });
        // Puedes manejar el error aquí si es necesario
      });
  },
});

// Exporta la acción y el reducer del slice de transacciones
export const { createTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
