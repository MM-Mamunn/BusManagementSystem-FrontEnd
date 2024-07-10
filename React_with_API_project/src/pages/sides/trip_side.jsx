
import "../CSS/main2.css";
function Trip_side() {
  return (
    <>
     
     <div class="bg-cover bg-center  min-h-screen flex flex-col items-center justify-top p-2" > 
    
     <ul id= "trip_side" >
  <li className="  px-4 py-2 rounded m-4 "><a href="/trips_home/trip_all" >Show All Trip</a></li>
  <li className="  px-4 py-2 rounded m-4  "><a href="/trips_home/search_trip" >Search Trip</a></li>
  <li  className="  px-4 py-2 rounded m-4 "><a href="/trips_home/count_trip">Count Trips</a></li>
  <li className="  px-4 py-2 rounded m-4 "><a href="/trips_home/trip_insert" >Insert New Trip</a></li>
  <li className="  px-4 py-2 rounded m-4 "><a href="/coming_soon" >Cancel Trip</a></li>
</ul>
</div>
    </>
  );
}

export default Trip_side;
