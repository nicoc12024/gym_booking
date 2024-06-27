import { createSlice } from "@reduxjs/toolkit";
import { getWeekDates, getCurrentWeekNumber } from "../../pages/Home/helpers";

const initialState = {
  weekOffset: 0,
  currentTime: new Date().toISOString(),
  currentWeekNumber: getCurrentWeekNumber(),
  currentWeekDates: getWeekDates().days,
  currentMonths: getWeekDates().months,
  currentYearRange: getWeekDates().yearRange,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setWeekOffset: (state, action) => {
      state.weekOffset = action.payload;
      state.currentWeekNumber = getCurrentWeekNumber(action.payload);
      const { days, months, yearRange } = getWeekDates(action.payload);
      state.currentWeekDates = days;
      state.currentMonths = months;
      state.currentYearRange = yearRange;
    },
    updateCurrentTime: (state) => {
      state.currentTime = new Date().toISOString();
    },
    setCurrentWeekDates: (state, action) => {
      state.currentWeekDates = action.payload;
    },
    setCurrentMonths: (state, action) => {
      state.currentMonths = action.payload;
    },
    setCurrentYearRange: (state, action) => {
      state.currentYearRange = action.payload;
    },
  },
});

export const {
  setWeekOffset,
  updateCurrentTime,
  setCurrentWeekDates,
  setCurrentMonths,
  setCurrentYearRange,
} = calendarSlice.actions;
export default calendarSlice.reducer;
