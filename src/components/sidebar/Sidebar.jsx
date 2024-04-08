import React from "react";
import { SIDE_BAR_LINKS } from "../../pages/Router/constants";
import "./sidebar.scss";
function Sidebar() {
  return (
    <div className=" bg-[#212121]  h-[100vh] brd-r  sticky  top-0  ">
      <div className="p-4">
        <div className="flex items-center">
          {/* <img src={logo} className="h-[40px] object-contain" /> */}
          <h1 className=" text-[26px]  font-semibold text-[#ff6a2f]">
            <span>Warner</span> Bros
          </h1>
        </div>
        <ul className="text-white space-y-8 py-9    text-[14px] px-2">
          {SIDE_BAR_LINKS.map((link, index) => (
            <li key={index} className="flex items-center">
              {link.icon}
              {link.label}
            </li>
          ))}
        </ul>
        <button className="absolute bottom-4 bg-[#353434] w-[83%] left-[10px] rounded-md h-[28px] text-[#e7e7e7] font-semibold text-[12px]">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
