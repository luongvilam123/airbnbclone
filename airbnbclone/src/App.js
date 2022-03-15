import Navbar from "./components/Navbar"
import Card  from "./components/Card"
import Hero from "./components/Hero"
import data from "./Data/data"

export default function App(){
      const cardList=data.map((item)=> { return( 

            <Card image={item.coverImg} 
                  rating={item.stats.rating}
                  reviewCount={item.stats.reviewCount}
                  country={item.location}
                  title={item.title} 
                  price={item.price} />)
            })
    return(
    <div className="container">
      <Navbar />
      <Hero />
      <div className="CardList">
            {cardList}
      </div>
    </div>
    )
}