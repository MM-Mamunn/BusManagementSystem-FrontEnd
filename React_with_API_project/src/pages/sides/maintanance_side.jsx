
import { Link, NavLink } from "react-router-dom";
import "../CSS/main2.css";
import Maintanance_home from "../maintanance/maintanance_home";
function Maintanance_side() {
  return (
    <>
     
     <div class="bg-cover bg-center  min-h-screen flex flex-col items-center justify-top p-2" > 
    
     <ul id= "trip_side" >
  <li className="  px-4 py-1 rounded m-4 ">
  <NavLink
                to="/maintanance/maintanance_view"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                    : ""
                }
              >
     Show All Maintances
              </NavLink>
  </li>

  
</ul>
</div>
    </>
  );
}

export default Maintanance_side;