import ConfirmationModalSlot from "./ConfirmationModalSlot";
import useSlotBooking from "../hooks/useSlotBooking";

const TableRow = ({ hour, dayIndex, bookedSlots, date_and_start_time }) => {
  const {
    isBooked,
    isBookedByOthers,
    hasUserBooked,
    disabled,
    bookOrCancelSlot,
    isOpen,
    onOpenChange,
  } = useSlotBooking(hour, dayIndex, date_and_start_time, bookedSlots);

  return (
    <>
      <td
        key={dayIndex}
        onClick={() => bookOrCancelSlot()}
        className={`border w-[200px] border-gray-300 whitespace-nowrap px-3 text-sm text-center ${
          disabled
            ? "bg-gray-200"
            : isBookedByOthers
            ? "bg-gray-200"
            : isBooked
            ? "bg-green-500 hover:bg-green-400 text-white cursor-pointer"
            : hasUserBooked
            ? "bg-transparent"
            : "bg-transparent cursor-pointer"
        }`}
      >
        {isBooked && "Confirmado"}
      </td>
      <ConfirmationModalSlot isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default TableRow;
