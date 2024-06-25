import { useSelector, useDispatch } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import { setWeekOffset } from "../../state/Store/calendarSlice";

const WeekNavigator = () => {
  const dispatch = useDispatch();

  const { weekOffset, currentWeekNumber, currentMonths, currentYearRange } = useSelector(
    (state) => state.calendar
  );

  return (
    <div className="flex justify-between items-center py-2 sm:py-0 bg-white sm:bg-transparent sm:border-none border-t">
      <div className="flex-1 px-2 flex sm:gap-2 gap-6 justify-center">
        <button
          className="hover:bg-neutral-100 rounded-[50%] p-1"
          onClick={() => dispatch(setWeekOffset(Math.max(weekOffset - 1, -1)))}
          disabled={weekOffset === -1}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          className="hover:bg-neutral-100 rounded-[50%] p-1"
          onClick={() => dispatch(setWeekOffset(Math.min(weekOffset + 1, 1)))}
          disabled={weekOffset === 1}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
      <div className="flex-2 flex justify-center">
        <button className="py-2 px-4 border rounded sm:text-[20px] text-[16px] hover:bg-neutral-100">
          Semana #{currentWeekNumber} {currentMonths} {currentYearRange}
        </button>
      </div>
      <div className="flex-1 px-2 flex justify-center">
        <button
          className="hover:bg-neutral-100 rounded-[50%] p-1 cursor-pointer"
          onClick={() => dispatch(setWeekOffset(0))}
          disabled={weekOffset === 0}
        >
          <ThreeSixtyIcon />
        </button>
      </div>
    </div>
  );
};

export default WeekNavigator;
