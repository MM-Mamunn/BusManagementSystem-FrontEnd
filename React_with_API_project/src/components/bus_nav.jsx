import React from 'react';
import { NavLink } from 'react-router-dom';

import busImage from '../pages/image/bus2.png';

export default function Busheader() {
  return (
    <nav className="font-bold p-2 bg-purple-500">
      <div className="flex items-center justify-between">
        <div className="flex space-x-6">
          <img className="w-16 h-12" src={busImage} alt="Bus" />
          <NavLink
            to="/bus_view"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded border-2 p-2  border-white font-bold'
                : 'text-white-200 bg-purple-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            All Buss(s)
          </NavLink>
          <NavLink
            to="/total_distance"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded p-2  border-2 border-white font-bold'
                : 'text-white-200 bg-purple-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            Count Totall distance
          </NavLink>
          <NavLink
            to="/bus_delete"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded p-2  border-2 border-white font-bold'
                : 'text-white-200 bg-purple-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
           Delete Bus
          </NavLink>
          <NavLink
            to="/coming_soon"
            className={({ isActive }) =>
              isActive
                ? 'text-black-200 bg-stone-400 mt-1 mb-1  rounded p-2  border-2 border-white font-bold'
                : 'text-white-200 bg-purple-400 mt-1 mb-1  rounded border-2  pl-2 pr-2 border-black  hover:text-blue-200'
            }
          >
            Update Bus
          </NavLink>
        
        </div>
        <a href ="/bus_home" style={{padding: "10px",width:"130px"}} class="bg-indigo-950 p-2  text-white hover:text-blue-200 rounded">
             Bus Home
            </a>
      </div>
    </nav>
  );
}
