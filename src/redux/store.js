import { configureStore } from "@reduxjs/toolkit";
import covidSlice from './Slice/covidSlice';

export const store = configureStore({
  reducer: {
    covid: covidSlice,
  },
});