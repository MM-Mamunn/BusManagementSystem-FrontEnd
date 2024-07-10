import Header from '../components/nav'
import Footer from '../components/footer'
import Driverheader from '../components/driver_nav';
import Tripheader from '../components/trip_nav';
import {useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Failed(){

  const id  = useParams();

  useEffect(() =>{
console.log(id);
  },[id]);
    return(
        <>
        <Header/>
        {
          id.id == "1" ? (<Tripheader/>) : (
            id.id == "2"? (<Driverheader/>) : (
              id.id == "3"? (""):("")
            )
          )
        }
        
        {
          id.id2 ? (
            <button className="btn btn-error">No data found</button>
          ) : (
            <button className="btn btn-error">Error</button>
          )
        }
        <footer style ={{position: "fixed" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
        </>

    )
}