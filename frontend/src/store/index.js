// store.js

import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/slice";
import transactionsSlice from "./transaccion/slice"
import rifaSlice from "./rifas/slice"
import participanteRifaSlice from "./participanteRifa/slice"

const store = configureStore({
  reducer: {
    users: usersSlice,
    transaccion: transactionsSlice,
    rifas: rifaSlice,
    participanteRifa: participanteRifaSlice,

  },
});

export default store; 
