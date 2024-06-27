import TableHeader from "./TableHeader";
import useSlots from "../../../utils/hooks/useSlots";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CalendarBody from "./CalendarBody";

const CalendarTable = () => {
  const { handleFetchSlots } = useSlots();

  useEffect(() => {
    handleFetchSlots();
  }, [handleFetchSlots]);

  const bookedSlots = useSelector((state) => state.slots.bookedSlots);
  const { currentTime: currentTimeString, currentWeekDates } = useSelector(
    (state) => state.calendar
  );

  const currentTime = new Date(currentTimeString);

  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle">
        <table className="min-w-full border-collapse table-fixed divide-y divide-gray-300">
          <TableHeader />
          <CalendarBody
            bookedSlots={bookedSlots}
            currentWeekDates={currentWeekDates}
            currentTime={currentTime}
          />
        </table>
      </div>
    </div>
  );
};

export default CalendarTable;
