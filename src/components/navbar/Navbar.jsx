import React from "react";

function Navbar() {
  return (
    <div>
      <div className="bg-slate-100">
        <div className="px-5 py-4 flex items-center">
          <h2 className=" me-auto font-bold">Dashboard</h2>
          <ul className=" flex  [&>li]:mx-2  ">
            <li>Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
