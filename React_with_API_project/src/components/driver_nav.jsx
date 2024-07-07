import { Link } from "react-router-dom";
import driverImage from '../pages/image/driver.png';
import "../pages/CSS/driver_view.css";
export default function Driverheader() {
  return (
    <>
      <nav  class=" font-bold  bg-green-500 p-4">
        <div class="flex items-center justify-between">
          <div class="flex space-x-6">   
          <img className="w-16 h-12" src={driverImage} alt="Bus" />   
            <a href="/driver_insert" class="text-white hover:text-blue-200">
              Insert Driver
            </a>
            <a href="/driver_view" class="text-white hover:text-blue-200">
              Show All Driver
            </a>
            <a href="/coming_soon" class="text-white hover:text-blue-200">
              Update Driver
            </a>
            <a href="/coming_soon" class="text-white hover:text-blue-200">
              Search Driver
            </a>
          </div>
          <a href="#" class="bg-indigo-950 p-2  ml-5 text-white hover:text-blue-200 rounded">
             Drivers Home
            </a>
        </div>
      </nav>
    </>
  );
}
