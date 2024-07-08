import React from "react";
import { NavLink } from "react-router-dom";
import driverImage from "../pages/image/bus3.png";

export default function Header() {
  return (
    <div
     
    >
      <nav
        style={{ textShadow: "4px 4px 4px #0000ff", fontWeight: "40px" }}
        className="font-bold p-2 bg-blue-500"
      >
        <div className="flex items-center justify-between">
          <div className="flex space-x-6">
            <img className="w-16 h-12" src={driverImage} alt="Bus" />
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/trips_home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2  font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Trip Home
            </NavLink>
            <NavLink
              to="/drivers_home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Drivers Home
            </NavLink>
            <NavLink
              to="/bus_home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Bus Home
            </NavLink>
            <NavLink
              to="/coming_soon"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Maintanace
            </NavLink>
            <NavLink
              to="/about_us"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              About Us
            </NavLink>
          </div>
          <a
            href="/home"
            style={{ padding: "10px", width: "170px" }}
            class="bg-indigo-950 p-6  text-white hover:text-blue-200 rounded"
          >
            Bus Maintanance
          </a>
        </div>
      </nav>
    </div>
  );
}
