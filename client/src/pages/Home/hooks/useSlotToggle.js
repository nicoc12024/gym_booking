// // Arma el slotKey, slotInfo y isCancelling para el pendingSlot

// import { useDispatch, useSelector } from "react-redux";
// import { setPendingSlot } from "../../../state/Store/slotSlice";
// import { fullDaysOfWeek } from "../../../pages/Home/helpers";

// const useSlotToggle = (currentWeekNumber, currentWeekDates, onOpen) => {
//   const dispatch = useDispatch();
//   const { selectedSlot } = useSelector((state) => state.slots);

//   const toggleSlot = (dayIndex, hour) => {
//     const slotKey = `${currentWeekNumber}-${dayIndex}-${hour}`; // "24-2-01:00" (semana 24, miércoles a la 1 AM)
//     const dayName = fullDaysOfWeek[dayIndex]; // dayName: "Miércoles"
//     const dateObj = new Date();
//     dateObj.setDate(currentWeekDates[dayIndex]);

//     const date = dateObj.toLocaleDateString("es-ES", {
//       day: "numeric",
//       month: "long",
//     });
//     // date: "14 de junio"

//     const isSlotSelected = selectedSlot === slotKey; // "24-2-01:00" comparación da V o F

//     dispatch(
//       setPendingSlot({
//         slotKey,
//         slotInfo: { dayName, date, hour }, // pendingSlotInfo: { dayName: "Miércoles", date: "14 de junio", hour: "01:00" }
//         isCancelling: isSlotSelected,
//       })
//     );

//     onOpen();
//   };

//   return toggleSlot;
// };

// export default useSlotToggle;
