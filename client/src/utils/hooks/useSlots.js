import { useContext, useCallback } from "react";
import { AuthContext } from "../../state/AuthContext/AuthContext.jsx";
import { fetchSlots, bookSlot } from "../../utils/api/slotService";
import { useDispatch } from "react-redux";
import { setBookedSlots } from "../../state/Store/slotSlice.js";

const useSlots = () => {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleFetchSlots = useCallback(async () => {
    try {
      const { gymSlots } = await fetchSlots(token);
      dispatch(setBookedSlots(gymSlots));
    } catch (error) {
      console.error(
        "Error while fetching slots:",
        error.response ? error.response.data : error.message
      );
    }
  }, [token, dispatch]);

  const handleBookSlot = async (date_and_start_time) => {
    try {
      await bookSlot(date_and_start_time, token);
      handleFetchSlots();
    } catch (error) {
      console.error(
        "Error while booking slot:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return {
    handleFetchSlots,
    handleBookSlot,
  };
};

export default useSlots;
