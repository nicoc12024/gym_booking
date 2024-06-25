import { useSelector } from "react-redux";
import { isSlotDisabled } from "../helpers";
import useSlots from "../../../utils/hooks/useSlots";

const TableRow = ({ hour, dayIndex, bookedSlots, date_and_start_time }) => {
  const {
    weekOffset,
    currentTime: currentTimeString,
    currentWeekDates,
  } = useSelector((state) => state.calendar);

  const { handleBookSlot } = useSlots();

  const currentTime = new Date(currentTimeString);

  const isBooked = bookedSlots.some(
    (slot) =>
      slot.date === date_and_start_time.date &&
      slot.start_time === date_and_start_time.start_time
  );

  const disabled = isSlotDisabled(
    dayIndex,
    hour.name,
    currentWeekDates,
    currentTime,
    weekOffset
  );

  return (
    <td
      key={dayIndex}
      onClick={() => !disabled && !isBooked && handleBookSlot(date_and_start_time)}
      className={`border w-[200px] ${
        disabled
          ? "bg-gray-200"
          : isBooked
          ? "bg-red-500 text-white"
          : "bg-transparent cursor-pointer"
      } border-gray-300 whitespace-nowrap px-3 py-4 text-sm text-center`}
    ></td>
  );
};

export default TableRow;
