
import { Link } from "react-router-dom";
import "../CSS/main2.css";
function Trip_side() {
  return (
    <>
     
     <div class="bg-cover bg-center  min-h-screen flex flex-col items-center justify-top p-2" > 
    
     <ul id= "trip_side" >
  <li className="  px-4 py-2 rounded m-4 "><Link  to="/trips_home/trip_all" >Show All Trip</Link></li>
  <li className="  px-4 py-2 rounded m-4  "><Link  to="/trips_home/search_trip" >Search Trip</Link></li>
  <li  className="  px-4 py-2 rounded m-4 "><Link  to="/trips_home/count_trip">Count Trips</Link></li>
  <li className="  px-4 py-2 rounded m-4 "><Link  to="/trips_home/trip_insert" >Insert New Trip</Link></li>
  <li className="  px-4 py-2 rounded m-4 "><Link  to="/coming_soon" >Cancel Trip</Link></li>
</ul>
</div>
    </>
  );
}

export default Trip_side;
