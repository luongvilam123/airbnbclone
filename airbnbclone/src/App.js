import Navbar from "./components/Navbar"
import Card  from "./components/Card"
import Hero from "./components/Hero"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"



export default function App(){
    return(
    <div className="container">
      <Navbar />
      <Hero />
      <div className="CardList">
       <Card image={img1} 
             rating="5.0"
             reviewCount={6}
             country="USA"
             title="Lessons with Putin" 
             price="$136" />

       <Card image={img2} 
             rating="4.9"
             reviewCount={7}
             country="England"
             title="Lessons with Elizabeth" 
             price="$500"/>

       <Card image={img3} 
             rating="3.0"
             reviewCount={8}
             country="VietNam"
             title="Lessons with Bike" 
             price="$300"/>
       
      </div>
    </div>
    )
}