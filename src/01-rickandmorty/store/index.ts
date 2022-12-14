import { configureStore } from '@reduxjs/toolkit';

import rickMortySlice from "./slices/rickMortyAppSlice";

const store = configureStore({
  reducer: {
    rickMorty : rickMortySlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;