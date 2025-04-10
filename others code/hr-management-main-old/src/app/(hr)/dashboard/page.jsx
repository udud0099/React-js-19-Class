import Hired from "@/components/hired";
import Interview from "@/components/interview";
import Meeting from "@/components/meeting";
import Position from "@/components/position";
import Task from "@/components/task";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
  return (
    <div className="flex gap-6 p-6 ">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-7">
          <Position />
          <Interview />
          <Hired />
        </div>
        <Meeting />
      </div>
      <div className="flex flex-col gap-5">
        <Calendar className="flex  px-6 py-30  rounded-xl bg-white w-full shadow-custom1 font-Poppins" />
        <Task />
      </div>
    </div>
  );
}
