import axios from "axios";
import Header from "../components/nav";
import Footer from '../components/footer'
// import "./CSS/bus_view.css";
// import "./CSS/driver_view.css";
import { useState } from "react";
import { useEffect } from "react";
import Busheader from '../components/bus_nav';


function Bus_view() {
  const [bus, setdrivers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/bus_view?limit=1000")
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
   <div style ={{position:"sticky", top: "0", left: "0"}}>
     <Busheader/>
     </div>
     <body class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center  " 
      style={{minHeight:"120vh", margin:"0",padding:"0",backgroundImage: "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", minHeight:"110vh" }}> 

   <div className="p-4 bg-white rounded-lg shadow-xl overflow-hidden w-4/5 max-w-lg mx-auto"> 
   <table className="mb-2 min-w-full bg-gray-800 text-black"> 
   <caption className="text-2xl font-bold p-4 text-center bg-gray-50 text-gray-900 border-b border-gray-300 animate-pulse">Bus View</caption> 
        <thead>
          <tr >
          <th className="p-2 bg-blue-200 ">Bus ID</th>
            <th className="p-2 bg-blue-200">Category</th>
            <th className="p-2 bg-blue-200">license_no</th>
            <th className="p-2 bg-blue-200">Assign</th>
          </tr>
        </thead>
        <tbody>
          {bus?.map((iterate) => (
            <tr key={iterate?.bus_id} className="hover:bg-blue-100">
              
              <td className="p-2 bg-green-200">{iterate?.bus_id}</td>  
              <td className="p-2 bg-green-200">{iterate?.category}</td>
              <td className="p-2 bg-green-200">{iterate?.license_no}</td>
              <td className="p-2 bg-green-200">{iterate?.assign}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    {/* <div className="table-container"> 
        <table className="table"> 
            <caption className="caption">Bus View</caption> 
            <thead> 
                <tr> 
                    <th>Bus ID</th> 
                    <th>Category</th> 
                    <th>License_No</th> 
                    <th>Assign</th> 
                </tr> 
            </thead> 
            <tbody> 
            {bus?.map((iterate) => (
            <tr key={iterate?.bus_id} className="hover:bg-blue-100">
              
              <td className="p-2 bg-green-200">{iterate?.bus_id}</td>  
              <td className="p-2 bg-green-200">{iterate?.category}</td>
              <td className="p-2 bg-green-200">{iterate?.license_no}</td>
              <td className="p-2 bg-green-200">{iterate?.assign}</td>
            </tr>
          ))}
            </tbody> 
        </table> 
    </div>  */}
    </body>
    <footer style ={{position: "sticky" , top:"100vh", width:"100vw"}}>
      <Footer/>
      </footer>
    </>
  );
}

export default Bus_view;
