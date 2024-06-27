import { useContext, useCallback } from "react";
import { AuthContext } from "../../state/AuthContext/AuthContext.jsx";
import { fetchSlots, bookSlot, deleteSlot } from "../../utils/api/slotService";
import { useDispatch } from "react-redux";
import { setBookedSlots } from "../../state/Store/slotSlice.js";

const useSlots = () => {
  const { token, user } = useContext(AuthContext);
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

  const handleDeleteSlot = async () => {
    try {
      await deleteSlot(user.id, token);
      handleFetchSlots();
    } catch (error) {
      console.error(
        "Error while deleting slot:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return {
    handleFetchSlots,
    handleBookSlot,
    handleDeleteSlot,
  };
};

export default useSlots;
