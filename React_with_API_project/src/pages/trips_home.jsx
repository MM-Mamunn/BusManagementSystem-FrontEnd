import Header from "../components/nav";
import "./CSS/drivers_home.css";
import Footer from "../components/footer";
import Tripheader from "../components/trip_nav";
import Trip_side from "./sides/trip_side";
import Side from "./sides/side";
function Trip_home() {
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
          <div style ={{height:"300px",paddingTop:"100px",width:"300px",margin:"auto",textAlign:"center",fontweight:"900" ,borderRadius:"6px",boxShadow:"3px 3px 5px red",backgroundColor:"grey"}}>Trip er home e achi bhai</div>
          </div>
          <div className="bx3 box">
            <Trip_side />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trip_home;
