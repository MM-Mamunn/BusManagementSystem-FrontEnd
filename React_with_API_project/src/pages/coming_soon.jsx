import Header from '../components/nav'
import "./CSS/main.css";
import Footer from '../components/footer'
export default function Coming_soon(){
    return(
        <>
        
        <body style={{height:"100vh", margin:"0",padding:"0", backgroundImage: "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>    
        <Header/>
        
            <div id = "success" >Coming Soon</div>
        <footer style ={{position: "fixed" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
      </body>
        </>
    )
    
}