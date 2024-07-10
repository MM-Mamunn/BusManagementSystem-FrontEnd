import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Driver_insert from "./pages/driver_insert";
import Trip_insert from "./pages/trip_insert";
import Success from "./pages/success";
import Driver_view from "./pages/driver_view";
import Bus_view from "./pages/bus_view";
import Failed from "./pages/failed";
import Driver_home from "./pages/drivers_home";
import Trip_home from "./pages/trips_home";
import Search_trip from "./pages/search_trip";
import Trip_all from "./pages/trip_all";
import Bus_home from "./pages/bus_home";
import Count_trip from "./pages/count_trip";
import About_us from "./pages/about_us";
import Bus_distance from "./pages/bus_distance";
import Bus_delete from "./pages/bus_delete";
import Coming_soon from "./pages/coming_soon";
import Driver_update from "./pages/driver_update";
import Show_Search_Trip from "./pages/show_search_trip";
import Show_count_payment from "./pages/show_count_payment";

//import  './driver_insert.jsx';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/drivers_home/driver_insert"
              element={<Driver_insert />}
            />
            <Route
              path="/drivers_home/driver_update"
              element={<Driver_update />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/drivers_home/driver_view" element={<Driver_view />} />
            <Route path="/failed">
              <Route path="" element={<Failed />} />
              <Route path=":id?/:id2?" element={<Failed />} />
            </Route>
            <Route path="/bus_view" element={<Bus_view />} />
            <Route path="/drivers_home" element={<Driver_home />} />
            {/* <Route path="/count_trip" element={<C />} /> */}

            <Route path="/trips_home">
              <Route path="search_trip">
                <Route path="" element={<Search_trip />} />
                <Route path=":id" element={<Show_Search_Trip />} />
              </Route>
              <Route path="count_trip">
                <Route path="" element={<Count_trip />} />
                <Route path=":id" element={<Show_count_payment />} />
              </Route>
              <Route path="" element={<Trip_home />} />
              <Route path="trip_insert" element={<Trip_insert />} />
              <Route path="trip_all" element={<Trip_all />} />
            </Route>

            <Route path="/bus_home" element={<Bus_home />} />
            <Route path="/about_us" element={<About_us />} />
            <Route path="/total_distance" element={<Bus_distance />} />
            <Route path="/bus_delete" element={<Bus_delete />} />
            <Route path="/coming_soon" element={<Coming_soon />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
