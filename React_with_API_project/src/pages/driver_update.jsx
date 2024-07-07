import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import Driverheader from "../components/driver_nav";
import axios from "axios";
import Footer from "../components/footer";

function Driver_update() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .patch("http://127.0.0.1:8000/api/driver_update", data)
      .then((res) => {
        navigate("/success");
        // console.log(res);
      })
      .catch((error) => {
     //   navigate("/failed");
      });
  };
  return (
    <>
      <Header />
      <div style={{ position: "sticky", top: "0", left: "0" }}>
        <Driverheader />
      </div>
      <form onSubmit={handleSubmit}>
        <a
          className="bg-green-500 text-white px-1 py-1 mx-2 rounded  my-2  "
          href="/driver_insert"
        >
          Update Driver
        </a>
        <input type="text" placeholder="id" id="id" name="id" required />
        <input
          type="text"
          placeholder="driver_id"
          id="driver_id"
          name="driver_id"
          required
        />
        <input type="text" placeholder="name" name="name" required />
        <input
          type="number"
          placeholder="age"
          name="age"
          min="18"
          max="120"
          required
        />
        <input
          type="text"
          placeholder="license_no"
          name="license_no"
          required
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 mx-1 rounded">
          Update
        </button>
      </form>
      <footer style={{ position: "fixed", top: "87vh", width: "100vw" }}>
        <Footer />
      </footer>
    </>
  );
}
export default Driver_update;
