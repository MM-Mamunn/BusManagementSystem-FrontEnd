import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import Tripheader from "../components/trip_nav";
import Footer from "../components/footer";

function Search_trip() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    navigate(`/trips_home/search_trip/${data.driver_id}`);
  };

  return (
    <>
      <Header />
      <div style={{ position: "sticky", top: "0", left: "0" }}>
        <Tripheader />
      </div>
      <body
        class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center  "
        style={{
          minHeight: "120vh",
          margin: "0",
          padding: "0",
          backgroundImage:
            "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          minHeight: "110vh",
        }}
      >
        <form
          style={{ marginTop: "25vh" }}
          className=" w-1/2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Driver id"
            id="driver_id"
            name="driver_id"
            required
          />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            search
          </button>
        </form>

        <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
          <Footer />
        </footer>
      </body>
    </>
  );
}
export default Search_trip;
