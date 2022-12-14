import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchGlobal = createAsyncThunk("covid/fetchGlobal", async () => {
    const res = await axios(`https://covid19.mathdro.id/api`);
    return res.data;
});

export const fetchCountries = createAsyncThunk(
    "covid/fetchCountries",
    async () => {
      const res = await axios.get(`https://covid19.mathdro.id/api/countries`);
      return res.data.countries;
    }
  );

  export const fetchCountry = createAsyncThunk(
    "covid/fetchCountry",
    async (country) => {
      const res = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      return res.data;
    }
  );

export const covidSlice = createSlice({
    name:"covid",
    initialState:{
        items:'',
        newitems:'',
        status:"idle",
        error:'',
        countries: [],
        country:"",
    },
    reducers:{
        changeCountry: (state, action) => {
            state.country = action.payload;
          },
    },
    extraReducers:{
        [fetchGlobal.pending]: (state, action) => {
            state.status = "loading";
          },
          [fetchGlobal.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
          },
          [fetchGlobal.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          },
          [fetchCountry.pending]: (state, action) => {
    
          },
          [fetchCountry.fulfilled]: (state, action) => {
            state.newitems = action.payload;
            
          },
          [fetchCountry.rejected]: (state, action) => {
            
            state.error = action.error.message;
          },
          [fetchCountries.pending]: (state, action) => {
            
          },
          [fetchCountries.fulfilled]: (state, action) => {
            state.countries = action.payload;
            
          },
          [fetchCountries.rejected]: (state, action) => {
            
            state.error = action.error.message;
          },
    },
});

export const itemsSelector = (state) => state.covid.items;
export const newitemsSelector = (state) => state.covid.newitems;
export const countriesSelector = (state) => state.covid.countries;
export const statusSelector = (state) => state.covid.status;
export const errorSelector = (state) => state.covid.error;
export const countrySelector = (state) => state.covid.country;

export default covidSlice.reducer;
export const { changeCountry } = covidSlice.actions;