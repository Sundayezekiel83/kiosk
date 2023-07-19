import React from "react";
import person from "../assets/images/hamza.jpeg";
import { FaBell } from "react-icons/fa";
import { FiHome, FiUsers } from "react-icons/fi";
import { BsCaretDownFill, BsCreditCard } from "react-icons/bs";
import { RiDashboardLine, RiServiceFill } from "react-icons/ri";
import { RiCarFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";

const AppLayoutNew = ({ children }) => {
  const navigate = useNavigate();

  const sidebarElements = [
    {
      name: "Dashboard",
      path: "/home",
      icon: <FiHome />,
    },
    {
      name: "Warehouse",
      path: "/warehouse",
      icon: <RiCarFill />,
    },

    {
      name: "Partners",
      path: "/partners",
      icon: <FiUsers />,
    },
    {
      name: "Staff",
      path: "/staff",
      icon: <RiDashboardLine />,
    },
    {
      name: "Trasactions",
      path: "/transactions",
      icon: <RiDashboardLine />,
    },
    {
      name: "Report",
      path: "/report",
      icon: <RiDashboardLine />,
    },
  ];

  const secondarySideBarItems = ["How to Use"];

  return (
    <div className="flex h-screen">
      <aside className="flex flex-col w-[300px] h-full bg-white/90 py-5">
        <div className="flex items-center gap-2 px-10">
          <div className="rounded-full w-10 h-10 bg-[#41010b]"></div>
          <p className="text-xl font-bold">BisManger</p>
        </div>
        <div className="mt-10 px-5">
          <ul>
            {sidebarElements.map((item, idx) => (
              <li
                key={idx}
                className={` flex items-center justify-between text-[15px] font-medium opacity-70 pl-8 pr-5 py-3 hover:opacity-100 hover:text-primary cursor-pointer transition-all duration-300 ease-in-out ${
                  idx == 0 && "active-link"
                }`}
                onClick={() => navigate(item.path)}
              >
                <div className=" flex gap-3 items-center font-medium">
                  <span>{item.icon}</span>
                  <span className="">{item.name}</span>
                </div>
                {item.hasSubMenu ? <BsCaretDownFill size={12} /> : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <ul className="px-5">
            {secondarySideBarItems.map((item, idx) => (
              <li
                to={"#"}
                key={idx}
                className={`text-black/80 text-sm mb-1 px-7 py-1.5 flex gap-2.5 items-center hover:font-semibold hover:bg-slate-200 ${"hover:text-primary"} cursor-pointer`}
              >
                {item}
              </li>
            ))}
            <button
              onClick={() => navigate("/login")}
              className="w-full"
              to={"/login"}
            >
              <span
                className={`text-black/80 text-sm mb-1 px-7 py-1.5 flex gap-2.5 items-center hover:font-semibold hover:bg-slate-200 ${"hover:text-primary"}`}
              >
                Logout
              </span>
            </button>
          </ul>
        </div>
      </aside>
      <main className="flex-1 h-screen overflow-auto bg-bg">
        <header className="w-full h-[120px] flex items-center justify-between px-7">
          <button className="border border-primary/30 rounded px-3 py-3 flex items-center gap-2 text-primary">
            <RiServiceFill size={18} className="text-current" />
            <span className="font-medium">Pelemo Stores</span>
            <BiCaretDown className="text-current ml-5" />
          </button>
          <div className="flex gap-3 items-center">
            <button className="relative p-1.5 rounded bg-primary/30">
              <FaBell size={14} className="text-primary" />
            </button>
            <div className="flex items-center gap-2">
              <img className="w-11 rounded-full" src={person} alt="person" />
              {/* <div className="text-sm">
                <p className="font-semibold leading-4 text-base">Isah Hamza</p>
                <p>Admin</p>
              </div> */}
            </div>
          </div>
        </header>
        <section className="ml-4">{children}</section>
      </main>
    </div>
  );
};

export default AppLayoutNew;
