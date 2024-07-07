import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/nav";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Tripheader from "../components/trip_nav";
import Footer from "../components/footer";

function Show_count_payment() {
  const [drivers, setdrivers] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    if (id)
      axios
        .get(
          `http://127.0.0.1:8000/api/count_payment?driver_id=${id}&limit=1000`
        )
        .then((res) => {
          console.log(res?.data?.data?.users);
          setdrivers([]);
          if (res?.data?.data?.users) setdrivers(res.data.data.users);
          else navigate("/failed");
        })
        .catch((error) => {
          //   navigate("/failed");
        });
  }, [id]);

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
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        {drivers.length !== 0 && (
          <table
            style={{ marginLeft: "0vw", width: "26vw" }}
            className=" border-blue-500 rounded-sm  mt-4 "
          >
            <thead>
              <tr>
                <th className="p-2 bg-blue-200 ">Driver id</th>
                <th className="p-2 bg-blue-200">Payment</th>
              </tr>
            </thead>
            <tbody>
              {drivers?.map((iterate, i) => (
                <tr key={i} className="hover:bg-blue-100">
                  <td className="p-2 bg-green-200">{iterate?.driver_id}</td>
                  <td className="p-2 bg-green-200">{iterate?.sum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
          <Footer />
        </footer>
      </body>
    </>
  );
}
export default Show_count_payment;
