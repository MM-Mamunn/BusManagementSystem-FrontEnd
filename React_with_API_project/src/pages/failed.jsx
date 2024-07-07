import Header from '../components/nav'
import Footer from '../components/footer'

export default function Failed(){
    return(
        <>
        <Header/>
        <div id = "failed">Failed</div>
        <footer style ={{position: "fixed" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
        </>

    )
}