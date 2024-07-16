import { useContext, useCallback } from "react";
import { AuthContext } from "../../state/AuthContext/AuthContext.jsx";
import { fetchSlots, bookSlot, deleteSlot } from "../../utils/api/slotService";
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
      // El manejo del error y la notificación se realiza en fetchSlots
    }
  }, [token, dispatch]);

  const handleBookSlot = async (date_and_start_time) => {
    try {
      const data = await bookSlot(date_and_start_time, token);
      handleFetchSlots();
      console.log("Slot booked successfully", data);
    } catch (error) {
      // El manejo del error y la notificación se realiza en bookSlot
    }
  };

  const handleDeleteSlot = async (date_and_start_time) => {
    try {
      await deleteSlot(date_and_start_time, token);
      handleFetchSlots();
    } catch (error) {
      // El manejo del error y la notificación se realiza en deleteSlot
    }
  };

  return {
    handleFetchSlots,
    handleBookSlot,
    handleDeleteSlot,
  };
};

export default useSlots;
