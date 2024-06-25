import { daysOfWeek } from "../helpers";
import { useSelector } from "react-redux";

const TableHeader = () => {
  const currentWeekDates = useSelector((state) => state.calendar.currentWeekDates);
  const currentDate = new Date();
  const today = currentDate.getDate();

  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="sm:py-3.5 py-1 min-w-[80px] w-[200px] text-center font-light sm:text-[16px] text-[14px]"
        >
          GMT-3
        </th>
        {daysOfWeek.map((day, dayIndex) => (
          <th
            key={dayIndex}
            scope="col"
            className="bg-white sm:min-w-screen min-w-[100px] border-x sm:py-4 py-5 min-w-screen text-center text-[16px] font-light"
          >
            <div>
              <p className="text-[14px] font-light">{day}</p>
            </div>
            <div className="text-[26px] font-light w-10 h-10 rounded-full mx-auto">
              <p
                className={`${
                  currentWeekDates[dayIndex] === today
                    ? "bg-blue-500 rounded-full font-light text-center text-white"
                    : "font-light"
                }`}
              >
                {currentWeekDates[dayIndex]}
              </p>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
