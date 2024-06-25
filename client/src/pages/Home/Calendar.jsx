import { useSelector } from "react-redux";
import { useDisclosure } from "@nextui-org/react";
import ConfirmationModalSlot from "./components/ConfirmationModalSlot";
import CalendarTable from "./components/CalendarTable";
import useCurrentTime from "./hooks/useCurrentTime";
import useWeekDates from "./hooks/useWeekDates";

export default function Calendar() {
  const { isOpen, onOpenChange } = useDisclosure();

  const { weekOffset } = useSelector((state) => state.calendar);

  useCurrentTime();
  useWeekDates(weekOffset);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <CalendarTable />
      <ConfirmationModalSlot isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
