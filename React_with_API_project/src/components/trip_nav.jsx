import React from 'react';
import { NavLink } from 'react-router-dom';

import tripImage from '../pages/image/trip.png';

export default function Tripheader() {
  return (
    <nav className="font-bold p-2 bg-red-500">
      <div className="flex items-center justify-between">
        <div className="flex space-x-6">
          <img className="w-16 h-12" src={tripImage} alt="Bus" />
          <NavLink
            to="/trip_all"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded border-2 p-2  border-white font-bold'
                : 'text-white-200 bg-red-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            Show Trip
          </NavLink>
          <NavLink
            to="/search_trip"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded p-2  border-2 border-white font-bold'
                : 'text-white-200 bg-red-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            Search Trip
          </NavLink>
          <NavLink
            to="/count_trip"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded p-2  border-2 border-white font-bold'
                : 'text-white-200 bg-red-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            Count Trips
          </NavLink>
          <NavLink
            to="/trip_insert"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded p-2  border-2 border-white font-bold'
                : 'text-white-200 bg-red-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            Insert New Trip
          </NavLink>
          <NavLink
            to="/coming_soon"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded p-2  border-2 border-white font-bold'
                : 'text-white-200 bg-red-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            Cancel Trip
          </NavLink>
        </div>
        <a href ="/trips_home" style={{padding: "10px",width:"130px"}} class="bg-indigo-950 p-2  text-white hover:text-blue-200 rounded">
             Trips Home
            </a>
      </div>
    </nav>
  );
}
