import { useSelector, useDispatch } from "react-redux";
import { useDisclosure } from "@nextui-org/react";
import ConfirmationModalSlot from "./components/ConfirmationModalSlot";
import CalendarTable from "./components/CalendarTable";
import { confirmSlot } from "../../state/Store/slotSlice";
import useCurrentTime from "./hooks/useCurrentTime";
import useWeekDates from "./hooks/useWeekDates";
import useSlotToggle from "./hooks/useSlotToggle";

export default function Calendar() {
  const dispatch = useDispatch();
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const { weekOffset, currentWeekNumber, currentWeekDates } = useSelector(
    (state) => state.calendar
  );

  useCurrentTime();
  useWeekDates(weekOffset);

  const toggleSlot = useSlotToggle(currentWeekNumber, currentWeekDates, onOpen);

  const confirmPendingSlot = () => {
    dispatch(confirmSlot());
    onOpenChange();
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <CalendarTable toggleSlot={toggleSlot} />
      <ConfirmationModalSlot
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        confirmSlot={confirmPendingSlot}
      />
    </div>
  );
}
