import TableRow from "./TableRow";
import { hours, daysOfWeek } from "../helpers";

const CalendarBody = ({ bookedSlots, currentWeekDates, currentTime }) => {
  const currentMonth = currentTime.getMonth();
  const currentYear = currentTime.getFullYear();

  return (
    <tbody className="divide-y divide-gray-200">
      {hours.map((hour, index) => (
        <tr key={index}>
          <td className="border sticky bg-white left-0 py-4 border-gray-200 whitespace-nowrap text-center text-[10px]">
            {hour.name}
          </td>
          {daysOfWeek.map((_, dayIndex) => {
            const dateNumber = currentWeekDates[dayIndex];
            const date = new Date(currentYear, currentMonth, dateNumber);
            const formattedDate = date.toISOString().split("T")[0];

            const date_and_start_time = {
              date: formattedDate,
              start_time: `${hour.name}`,
            };

            return (
              <TableRow
                key={dayIndex}
                hour={hour}
                dayIndex={dayIndex}
                bookedSlots={bookedSlots}
                date_and_start_time={date_and_start_time}
              />
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarBody;
