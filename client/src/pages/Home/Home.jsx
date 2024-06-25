import WeekNavigator from "../../components/navbar/WeekNavigator";
import Calendar from "./Calendar";

export default function Home() {
  return (
    <div>
      <Calendar />
      <div className="sm:hidden sticky bottom-0">
        <WeekNavigator />
      </div>
    </div>
  );
}
