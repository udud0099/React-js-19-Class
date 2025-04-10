"use client";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import { useState } from "react";
const AllTemplate = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex text-custom-textPrimary">
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center w-screen z-1 min-h-screen border-r border-custom-borderColor `}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className=" bg-custom-bodyBg">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
      </div>
    </div>
  );
};

export default AllTemplate;
