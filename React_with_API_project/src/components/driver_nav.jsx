import { Link } from "react-router-dom";
import driverImage from '../pages/image/driver.png';
import "../pages/CSS/driver_view.css";
export default function Driverheader() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <nav  class=" font-bold  bg-green-500 p-4">
        <div class="flex items-center justify-between">
          <div class="flex space-x-6">   
          <img className="w-16 h-12" src={driverImage} alt="Bus" />   
            <Link to={`/drivers_home/driver_insert`} class="text-white hover:text-blue-200">
              Insert Driver
            </Link>
            <Link to={`/drivers_home/driver_view`} class="text-white hover:text-blue-200">
              Show All Driver
            </Link>
            <Link to={`/coming_soon`} class="text-white hover:text-blue-200">
              Update Driver
            </Link>
            <Link to={`/coming_soon`} class="text-white hover:text-blue-200">
              Search Driver
            </Link>
          </div>
          <Link to={`#`} class="bg-indigo-950 p-2  ml-5 text-white hover:text-blue-200 rounded">
             Drivers Home
            </Link>
        </div>
      </nav>
    </>
  );
}
