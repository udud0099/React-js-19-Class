

import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
const Header = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-row items-center justify-between h-20 px-6 py-3 bg-white shadow-custom2">
      <div className="flex items-center gap-5 text-base">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <GiHamburgerMenu size="1.5rem" />{" "}
        </button>
        <h1 className="text-xl font-semibold font-Lexend">
          Hello Username ! &#128075;
        </h1>
      </div>

      <div className="flex items-center text-sm ">
        {/* <div className="flex items-center mr-10 relative">
          <IoMdSearch className="text-2xl absolute left-5" />
          <input
            type="text"
            placeholder="Search for something"
            className="rounded-[40px] w-[270px] h-[45px] border pl-14"
          ></input>
        </div> */}

        <div className="mr-10 text-2xl">
          <CiSettings size="1.5rem" />
        </div>
        <div className="mr-10 text-xl">
          <IoNotificationsOutline />
        </div>
        <div className="border size-10 rounded-full relative">
          <Image src={"/next.svg"} alt="User" fill="true" />
        </div>
      </div>
    </div>
  );
};

export default Header;
