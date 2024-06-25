import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setCurrentMonths,
  setCurrentWeekDates,
} from "../../../state/Store/calendarSlice";
import { getWeekDates } from "../../../pages/Home/helpers";

const useWeekDates = (weekOffset) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { days, months } = getWeekDates(weekOffset);
    dispatch(setCurrentWeekDates(days));
    dispatch(setCurrentMonths(months));
  }, [weekOffset, dispatch]);
};

export default useWeekDates;
