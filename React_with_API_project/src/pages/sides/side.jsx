import { Link} from "react-router-dom";
import "../CSS/main2.css";
function Side() {
  return (
    <>

      <details style={{ margin: "5px" }}>
        <summary className="side" style={{height:"30px"}}>
            Trips
        </summary>
        <ul id="trip_side2" style={{ width: "300px" }}>
          <li className="  px-4 py-2 rounded m-4 ">
            <Link to="/trips_home/trip_all">Show All Trip</Link>
          </li>
          <li className="  px-4 py-2 rounded m-4  ">
            <Link to="/trips_home/search_trip">Search Trip</Link>
          </li>
          <li className="  px-4 py-2 rounded m-4 ">
            <Link to="/trips_home/count_trip">Count Trips</Link>
          </li>
          <li className="  px-4 py-2 rounded m-4 ">
            <Link to="/trips_home/trip_insert">Insert New Trip</Link>
          </li>
          <li className="  px-4 py-2 rounded m-4 ">
            <Link to="/coming_soon">Cancel Trip</Link>
          </li>
        </ul>
      </details>
      
    </>
  );
}

export default Side;
