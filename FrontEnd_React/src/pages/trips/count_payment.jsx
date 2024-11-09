import {  useNavigate, useParams } from "react-router-dom";
import Header from "../../components/nav";
import "../CSS/main.css";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Side from "../sides/side";
import Trip_side from "../sides/trip_side";
import axios from "axios";

function Count_payment() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    for(let i = 0 ; i < drivers.length;i++) {
      if(drivers[i].driver_id == data.driver_id) {
        navigate(`/trips_home/payment/${data.driver_id}`);
        return;
      }
    }
    alert(`Driver with "${data.driver_id}" does not exist.Select Correct Driver id`);
  };
  const [drivers, setdrivers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/driver_view?limit=1000")
      .then((res) => {
        setdrivers(res?.data?.data?.users);
        // console.log(res);
        // console.log(drivers);
      })
      .catch((error) => {
        alert("An error occured")
      });
  }, []);
  return (
    <>
      <Header />
      {/* <Tripheader /> */}
      <div className="mainn " style={{ backgroundColor: "#2f2b51" }}>
        <div className="containerr">
          <div className="bx1 box">
            <Side />
          </div>
          <div className="bx2 box">
            {/* Shadcn  */}
            <Card style={{marginLeft:"20vw", backgroundColor:"#48597f"}} className=" mt-2 w-[350px]">
              {/* <form onSubmit={handleSubmit}> */}
              <CardHeader>
                <CardTitle>Enter Driver Id</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
              </CardHeader>
              <CardContent>
                <form style ={{backgroundColor:"#8fa5db"}}onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Count Payment</Label>
                      <Input
                        type="text"
                        placeholder="Driver id"
                        id="driver_id"
                        name="driver_id"
                        required
                      />
                    </div>
                  </div>
                  <Button className="mt-2">Count payment</Button>
                </form>
              </CardContent>
              {/* </form> */}
            </Card>
          </div>
          <div className="bx3 box">
            <Trip_side />
          </div>
        </div>
      </div>
      <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
        <Footer />
      </footer>
    </>
  );
}
export default Count_payment;