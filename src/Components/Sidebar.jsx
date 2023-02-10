import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Calendar from "./Calender";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" , path: "" },
    { title: "Inbox", src: "Chat" , path: "/Calender" },
    { title: "Accounts",  src: "User", gap: true, path: "/Usermgt"  },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-800 h-screen p-5 pt-8 relative duration-300` }
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            My name
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <Link to={`/Dashboard${Menu.path}`} className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </Link>
            </li>
            
          ))}
        </ul>
      </div>   
    </div>
  );
};
export default Sidebar;

