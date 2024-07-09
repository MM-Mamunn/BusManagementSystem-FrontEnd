import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import Tripheader from "../components/trip_nav";
import Footer from "../components/footer";

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
      <div
        class="bg-cover bg-center  min-h-screen flex flex-col items-center justify-center p-0"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://cdn3.vectorstock.com/i/1000x1000/44/67/bus-silhouette-on-a-dark-background-vector-31404467.jpg')",
        }}
      >
        {/* Shadcn  */}
        <Card className="mt-2 w-[350px]">
          {/* <form onSubmit={handleSubmit}> */}
          <CardHeader>
            <CardTitle>Enter Driver Id</CardTitle>
            {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
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

        <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
export default Search_trip;
