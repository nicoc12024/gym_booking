import { useContext } from "react";
import { useSelector } from "react-redux";
import { isSlotDisabled } from "../helpers";
import useSlots from "../../../utils/hooks/useSlots";
import { AuthContext } from "../../../state/AuthContext/AuthContext";
import { useDisclosure } from "@nextui-org/react";

const useSlotBooking = (hour, dayIndex, date_and_start_time, bookedSlots) => {
  const {
    weekOffset,
    currentTime: currentTimeString,
    currentWeekDates,
  } = useSelector((state) => state.calendar);

  const { handleBookSlot } = useSlots();
  
  const { user } = useContext(AuthContext);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const currentTime = new Date(currentTimeString);

  const isBooked = bookedSlots.some(
    (slot) =>
      slot.user_id === user.id &&
      slot.date === date_and_start_time.date &&
      slot.start_time === date_and_start_time.start_time
  );

  const isBookedByOthers = bookedSlots.some(
    (slot) =>
      slot.user_id !== user.id &&
      slot.date === date_and_start_time.date &&
      slot.start_time === date_and_start_time.start_time
  );

  const hasUserBooked = bookedSlots.some((slot) => slot.user_id === user.id);

  const disabled = isSlotDisabled(
    dayIndex,
    hour.name,
    currentWeekDates,
    currentTime,
    weekOffset
  );

  const bookOrCancelSlot = () => {
    if (!disabled) {
      if (!isBooked && !hasUserBooked) {
        handleBookSlot(date_and_start_time);
      } else if (isBooked) {
        onOpen();
      }
    }
  };

  return {
    isBooked,
    isBookedByOthers,
    hasUserBooked,
    disabled,
    bookOrCancelSlot,
    isOpen,
    onOpenChange,
    onClose,
  };
};

export default useSlotBooking;
