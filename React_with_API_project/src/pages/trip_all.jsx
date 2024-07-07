import axios from "axios";
import Header from '../components/nav'
import "./CSS/driver_view.css";
import { useState } from "react";
import { useEffect } from "react";
import Tripheader from '../components/trip_nav';
import Footer from '../components/footer'
function Trip_all() {
  const [trips, setdrivers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/trip_all?limit=1000")
      .then((res) => {
        setdrivers(res?.data?.data?.users);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
     <Header/>
    <div style ={{position:"sticky", top: "0", left: "0"}}>
     <Tripheader/>
     </div>
     <body class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center  " 
      style={{minHeight:"120vh", margin:"0",padding:"0",backgroundImage: "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", minHeight:"110vh" }}> 

      <table  class=" border-blue-500 rounded-sm my-4">
        <thead>
          <tr>
            <th class="p-2 bg-blue-200 ">Driver id</th>
            <th class="p-2 bg-blue-200 ">Driver Name</th>
            <th class="p-2 bg-blue-200">Bus id</th>
            <th class="p-2 bg-blue-200">Date</th>
            <th class="p-2 bg-blue-200">Route</th>
          </tr>
        </thead>
        <tbody>
          {trips?.map((iterate) => (
            <tr key={iterate?.bus_id} class="hover:bg-blue-100">
              <td class="p-2 bg-green-200">{iterate?.driver_id}</td>
              <td class="p-2 bg-green-200">{iterate?.name}</td>
              <td class="p-2 bg-green-200">{iterate?.bus_id}</td>
              <td class="p-2 bg-green-200">{iterate?.date}</td>
              <td class="p-2 bg-green-200">{iterate?.route_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default Trip_all;
