import React from "react";
const TaskDetails = () => {
  return (
    <>
      <div className=" flex items-center text-sm p-2">
        <h3 className="font-semibold text-custom-primary"> 3:15</h3>
      </div>
      <div className=" border border-custom-primary w-0"></div>
      <div className="flex items-center p-2 text-[10px] ">
        <p className="text-sm">
          <span className="font-semibold"> Mini Soman: </span> Mean stack
          developer; 4th phase interview
          <span className="font-semibold "> 3:15 - 3:45</span>
        </p>
      </div>
    </>
  );
};

function Task() {
  return (
    <div className="px-6 py-4 flex-1 rounded-xl bg-white shadow-custom1">
      <div className=" mb-5 ">
        <h1 className="text-lg font-SFPro font-medium">Task</h1>
        <p className="text-sm "> Feb 13, Today</p>
      </div>
      <div className="flex p-2 justify-evenly bg-custom-primaryBg rounded-sm font-Poppins">
        <TaskDetails />
      </div>
    </div>
  );
}

export default Task;
