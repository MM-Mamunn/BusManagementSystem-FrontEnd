import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from '../components/footer'
import Busheader from '../components/bus_nav';
// import Tripheader from '../components/trip_nav';

function Bus_delete() {
  const [drivers, setdrivers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .get(
        `http://127.0.0.1:8000/api/bus_delete?bus_id=${data.bus_id}&limit=1000`
      )
      .then((res) => {
        navigate("/success");
      })
      .catch((error) => {
        navigate("/failed");
      });
  };
  return (
    <>
      <Header />
      <div style ={{position:"sticky", top: "0", left: "0"}}>
     <Busheader/>
     </div>
      <body class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center  " 
      style={{minHeight:"120vh", margin:"0",padding:"0",backgroundImage: "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", minHeight:"110vh" }}> 

      {/* <Tripheader/> */}
      <form  className=" mt-2 w-1/2" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Bus Id"
          id="bus_id"
          name="bus_id"
          required
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </form>
      <footer style ={{position: "sticky" , top:"100vh", width:"100vw"}}>
      <Footer/>
      </footer>
</body>
    </>
  );
}
export default Bus_delete;
