// store.js

import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/slice";
import transactionsSlice from "./transaccion/slice"

const store = configureStore({
  reducer: {
    users: usersSlice,
    transaccion: transactionsSlice,
  },
});

export default store; 
