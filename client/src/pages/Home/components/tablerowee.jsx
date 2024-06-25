import { useSelector } from "react-redux";
import { isSlotDisabled } from "../helpers";
import { GiCancel } from "react-icons/gi";

const TableRow = ({ hour, dayIndex, toggleSlot }) => {
  const {
    weekOffset,
    currentTime: currentTimeString,
    currentWeekNumber,
    currentWeekDates,
  } = useSelector((state) => state.calendar);

  const { selectedSlot } = useSelector((state) => state.slots);

  const currentTime = new Date(currentTimeString);

  const slotKey = `${currentWeekNumber}-${dayIndex}-${hour.name}`;
  const isSelected = selectedSlot === slotKey;
  const disabled = isSlotDisabled(
    dayIndex,
    hour.name,
    currentWeekDates,
    currentTime,
    weekOffset
  );

  const handleCancelSlot = () => {
    console.log("Slot cancelado");
  };

  return (
    <td
      key={dayIndex}
      onClick={() => !disabled && toggleSlot(dayIndex, hour.name)}
      className={`border w-[200px] ${
        disabled
          ? "bg-gray-200"
          : isSelected
          ? "bg-green-600 text-white flex justify-center items-center gap-2 cursor-auto"
          : "bg-transparent cursor-pointer"
      } border-gray-300 whitespace-nowrap px-3 py-4 text-sm text-center`}
    >
      {isSelected && "Confirmado"}
      {isSelected && <GiCancel onClick={() => handleCancelSlot} cursor={"pointer"} />}
      {disabled && !isSelected}
    </td>
  );
};

export default TableRow;
