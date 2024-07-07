import "./CSS/drivers_home.css";
import Header from "../components/nav";
import Driverheader from "../components/driver_nav";
import Footer from "../components/footer";

function Driver_home() {
  return (
    <>
      <Header />
      <div style={{ position: "sticky", top: "0", left: "0" }}>
        <Driverheader />
      </div>
      <div class="relative">
        <div className="-z-10 blur-md bg-[url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-bottom bg-blur-lg min-h-screen flex flex-col items-center justify-center p-0 absolute top-0 left-0 right-0 bottom-0"></div>
        <ul id="lists" className="list-none ml-20 mt-5">
          <li className="bg-blue-500 text-white px-4 py-2 rounded m-5  ">
            <a href="/driver_insert">Insert Driver</a>
          </li>
          <li className="bg-green-500 text-white px-4 py-2 rounded m-5 ">
            <a href="/driver_view">Show All Driver</a>
          </li>
          <li className="bg-yellow-500 text-white px-4 py-2 rounded m-5 ">
            <a href="/coming_soon">Update Driver</a>
          </li>
          <li className="bg-red-500 text-white px-4 py-2 rounded m-5 ">
            <a href="/coming_soon">Search Driver</a>
          </li>
        </ul>
      </div>
      <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
        <Footer />
      </footer>
    </>
  );
}

export default Driver_home;
