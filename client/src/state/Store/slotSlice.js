// src/state/slotSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookedSlots: [],
};

const slotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    setBookedSlots: (state, action) => {
      state.bookedSlots = action.payload;
    },
  },
});

export const { setBookedSlots, bookedSlots } = slotSlice.actions;
export default slotSlice.reducer;
