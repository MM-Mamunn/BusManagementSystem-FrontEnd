import Header from "../components/nav";
import "./CSS/drivers_home.css";
import Footer from "../components/footer";
import Busheader from "../components/bus_nav";
function Bus_home() {
  return (
    <>
      <Header />
      <div style={{ position: "sticky", top: "0", left: "0" }}>
        <Busheader />
      </div>
      <div class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center  ">
        <ul id="lists" className="list-none list-disc ml-20 mt-5">
          <li className="bg-blue-500 text-white px-4 py-2 rounded m-5  ">
            <a href="/bus_view">All Buss(s)</a>
          </li>
          <li className="bg-green-500 text-white px-4 py-2 rounded m-5 ">
            <a href="/total_distance">Count Totall distance</a>
          </li>
          <li className="bg-yellow-500 text-white px-4 py-2 rounded m-5 ">
            <a href="/bus_delete">Delete Bus</a>
          </li>
          <li className="bg-red-500 text-white px-4 py-2 rounded m-5 ">
            <a href="/coming_soon">Update Bus</a>
          </li>
        </ul>

        <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Bus_home;
