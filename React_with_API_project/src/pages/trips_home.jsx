
import Header from '../components/nav'
import "./CSS/drivers_home.css";
import Footer from '../components/footer'
import Tripheader from '../components/trip_nav';

function Trip_home() {
  return (
    <>
     <Header/>
    <div style ={{position:"sticky", top: "0", left: "0"}}>
     <Tripheader/>
     </div>
     <body class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center justify-center p-0" 
      style={{ minHeight:"100vh",backgroundImage: "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}> 
    
     <ul id = "lists"  className="list-none list-disc ">
  <li className="bg-green-500 text-white px-4 py-2 rounded m-2 "><a href="/trips_home/trip_all" >Show All Trip</a></li>
  <li className="bg-blue-500 text-white px-4 py-2 rounded m-2  "><a href="/trips_home/search_trip" >Search Trip</a></li>
  <li  className="bg-yellow-500 text-white px-4 py-2 rounded m-2 "><a href="/trips_home/count_trip">Count Trips</a></li>
  <li className="bg-red-500 text-white px-4 py-2 rounded m-2 "><a href="/trips_home/trip_insert" >Insert New Trip</a></li>
  <li className="bg-purple-500 text-white px-4 py-2 rounded m-2 "><a href="/coming_soon" >Cancel Trip</a></li>
</ul>
</body>
<footer style ={{position: "sticky" ,marginTop:"5x", top:"120vh", width:"100vw"}}>
      <Footer/>
      </footer>
    </>
  );
}

export default Trip_home;
