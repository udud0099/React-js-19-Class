"use client";
import { TbLayout2Filled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const links = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: TbLayout2Filled,
  },
  {
    label: "Applicants",
    url: "/applicants",
    icon: FaUser,
  },
  {
    label: "Positions",
    url: "/positions",
    icon: IoBag,
  },
  {
    label: "Calendar",
    url: "/calendar",
    icon: FaCalendar,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <div className="sticky top-0 left-0 flex flex-col items-center w-full p-5">
      <div className="m-2 flex gap-5">
        <Image src={"/Group.svg"} alt="logo" width="180" height="200" />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <RxCross1 size="1rem" />
        </button>
      </div>
      <div className="text-md grid gap-[2.75rem] font-SFPro py-5">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              href={link.url}
              key={index}
              className={isActive(link.url) ? "text-custom-primary" : ""}
            >
              <div className="flex items-center ">
                <Icon className="mr-5" />
                <p> {link.label} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
