import { useSelector } from "react-redux";
import CalendarTable from "./components/CalendarTable";
import useCurrentTime from "./hooks/useCurrentTime";
import useWeekDates from "./hooks/useWeekDates";

export default function Calendar() {
  const { weekOffset } = useSelector((state) => state.calendar);

  useCurrentTime();
  useWeekDates(weekOffset);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <CalendarTable />
    </div>
  );
}
