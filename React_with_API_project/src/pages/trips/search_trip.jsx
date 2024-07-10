import { useNavigate } from "react-router-dom";
import Header from "../../components/nav";
import Tripheader from "../../components/trip_nav";
import Footer from "../../components/footer";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Side from "../sides/side";
import Trip_side from "../sides/trip_side";

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
      {/* <Tripheader /> */}
      <div className="mainn " style={{ backgroundColor: "#2f2b51" }}>
        <div className="containerr">
          <div className="bx1 box">
            <Side />
          </div>
          <div className="bx2 box">
            {/* Shadcn  */}
            <Card style={{marginLeft:"20vw", backgroundColor:"#48597f"}}className=" mt-2 w-[350px]">
              {/* <form onSubmit={handleSubmit}> */}
              <CardHeader>
                <CardTitle>Enter Driver Id</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
              </CardHeader>
              <CardContent>
                <form style ={{backgroundColor:"#8fa5db"}}onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Enter Driver Id</Label>
                      <Input
                        type="text"
                        placeholder="Driver id"
                        id="driver_id"
                        name="driver_id"
                        required
                      />
                    </div>
                  </div>
                  <Button className="mt-2">Search</Button>
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
export default Search_trip;
