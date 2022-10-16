import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = ""

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter( _, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
