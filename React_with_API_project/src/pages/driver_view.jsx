import axios from "axios";
import Header from "../components/nav";
import Driverheader from "../components/driver_nav";
import "./CSS/driver_view.css";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/footer";

function Driver_view() {
  const [drivers, setdrivers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/driver_view?limit=1000")
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
      <Header />
      <body style = {{minHeight:"100vh"}}>
      <div style ={{position:"sticky", top: "0", left: "0"}}>
        <Driverheader/>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-300 via-teal-300 to-gray-700 relative">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden w-4/5 max-w-lg mx-auto">
          <table className="mb-2 min-w-full bg-gray-800 text-black">
            <caption style={{textShadow: "2px 2px 7px #000000"}} className="text-2xl font-bold p-4 text-center bg-gray-50 text-gray-900 border-b border-gray-300 animate-pulse">
              All Drivers
            </caption>
            <thead>
              <tr>
                <th className="p-2 bg-blue-200" style={{textShadow: "2px 2px 7px #000000"}}>Driver ID</th>
                <th className="p-2 bg-blue-200" style={{textShadow: "2px 2px 7px #000000"}}>Name</th>
                <th className="p-2 bg-blue-200" style={{textShadow: "2px 2px 7px #000000"}}>Age</th>
                <th className="p-2 bg-blue-200" style={{textShadow: "2px 2px 7px #000000"}}>License No</th>
              </tr>
            </thead>
            <tbody>
              {drivers?.map((iterate) => (
                <tr key={iterate?.bus_id} className="hover:bg-blue-100">
                  <td  className="p-2 bg-green-200">{iterate?.driver_id}</td>
                  <td   className="p-2 bg-green-200">{iterate?.name}</td>
                  <td   className="p-2 bg-green-200">{iterate?.age}</td>
                  <td   className="p-2 bg-green-200">{iterate?.license_no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer style ={{position: "sticky" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
      </body>
    </>
  );
}

export default Driver_view;
