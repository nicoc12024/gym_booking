import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSlot: null,
  pendingSlot: null,
  pendingSlotInfo: {},
  isCancelling: false,
};

const slotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    setPendingSlot: (state, action) => {
      state.pendingSlot = action.payload.slotKey; // "24-2-01:00" (semana 24, miércoles a la 1 AM)
      state.pendingSlotInfo = action.payload.slotInfo; // { dayName: "Miércoles", date: "14 de junio", hour: "01:00" }
      state.isCancelling = action.payload.isCancelling;
    },
    confirmSlot: (state) => {
      state.selectedSlot = state.isCancelling ? null : state.pendingSlot;
      state.pendingSlot = null;
      state.pendingSlotInfo = {};
      state.isCancelling = false;
    },
  },
});

export const { setPendingSlot, confirmSlot } = slotSlice.actions;
export default slotSlice.reducer;
