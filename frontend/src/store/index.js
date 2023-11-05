// store.js

import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/slice";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store; 
