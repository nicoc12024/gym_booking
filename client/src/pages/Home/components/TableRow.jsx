import ConfirmationModalSlot from "./ConfirmationModalSlot";
import useSlotBooking from "../hooks/useSlotBooking";
import { Spinner } from "@nextui-org/react";

const TableRow = ({
  hour,
  dayIndex,
  bookedSlots,
  date_and_start_time,
  globalLoading,
  setGlobalLoading,
}) => {
  const {
    isBookedByCurrentUser,
    isBookedByOthers,
    hasUserBooked,
    disabled,
    bookOrCancelSlot,
    isOpen,
    onOpenChange,
    isLoading,
  } = useSlotBooking(hour, dayIndex, date_and_start_time, bookedSlots, setGlobalLoading);

  const handleClick = (e) => {
    if (isBookedByOthers || globalLoading) {
      e.stopPropagation();
      return;
    }
    bookOrCancelSlot();
  };

  return (
    <>
      <td
        key={dayIndex}
        onClick={handleClick}
        className={`transition-all duration-250 ease-in-out border w-[200px] border-gray-300 whitespace-nowrap px-3 text-sm text-center ${
          disabled
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : isBookedByOthers
            ? "bg-gray-200 cursor-not-allowed"
            : isBookedByCurrentUser
            ? "bg-green-500 hover:bg-green-400 text-white cursor-pointer"
            : hasUserBooked
            ? "bg-transparent cursor-pointer"
            : "bg-transparent cursor-pointer text-transparent"
        } ${globalLoading ? "cursor-not-allowed" : ""}`}
      >
        {isLoading ? (
          <Spinner size="sm" className="mt-1" />
        ) : (
          isBookedByCurrentUser && "Confirmado"
        )}
      </td>
      <ConfirmationModalSlot
        date_and_start_time={date_and_start_time}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default TableRow;
