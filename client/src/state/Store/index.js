import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendarSlice";
import slotReducer from "./slotSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    slots: slotReducer,
  },
});

export default store;
