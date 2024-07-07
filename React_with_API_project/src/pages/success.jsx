import Header from '../components/nav'
import "./CSS/main.css";
import Footer from '../components/footer'
export default function Success(){
    return(
        <>
        <Header/>
        <div id = "success" >Successfull</div>
        <footer style ={{position: "fixed" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
        </>
    )
    
}