import { hours, daysOfWeek } from "../helpers";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import useSlots from "../../../utils/hooks/useSlots";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CalendarTable = ({ toggleSlot }) => {
  const { handleFetchSlots } = useSlots();

  useEffect(() => {
    handleFetchSlots();
  }, [handleFetchSlots]);

  const bookedSlots = useSelector((state) => state.slots.bookedSlots);
  useEffect(() => {
    console.log("Booked Slots:", bookedSlots);
  }, [bookedSlots]);

  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle">
        <table className="min-w-full border-collapse table-fixed divide-y divide-gray-300">
          <TableHeader />
          <tbody className="divide-y divide-gray-200">
            {hours.map((hour, index) => (
              <tr key={index}>
                <td className="border sticky bg-white left-0 py-4 border-gray-200 whitespace-nowrap text-center text-[10px]">
                  {hour.name}
                </td>
                {daysOfWeek.map((_, dayIndex) => (
                  <TableRow
                    key={dayIndex}
                    hour={hour}
                    dayIndex={dayIndex}
                    toggleSlot={toggleSlot}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarTable;
