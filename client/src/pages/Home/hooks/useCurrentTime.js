import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentTime } from "../../../state/Store/calendarSlice";

const useCurrentTime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateCurrentTime());
    }, 60000);
    return () => clearInterval(intervalId);
  }, [dispatch]);
};

export default useCurrentTime;
