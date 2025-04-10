import React from "react";
import { FaUsers } from "react-icons/fa";
const Hired = () => {
  return (
    <div className="flex flex-1 h-fit flex-col px-6 py-8 rounded-2xl  bg-white shadow-custom1 font-Lexend">
      <div className="size-10 rounded-full  flex items-center justify-center mb-8 text-custom-primary bg-custom-primaryBg">
        <FaUsers />
      </div>
      <div className="mb-4">
        <p className="text-base  font-light"> Hired Applicants </p>
      </div>
      <div className="mb-5">
        <p className="text-4xl font-semibold"> 8</p>
      </div>
    </div>
  );
};

export default Hired;
