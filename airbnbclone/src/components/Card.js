
import starticon from "../images/starticon.png"
export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {badgeText= "Sold Out"}
    else if (props.item.location ==="Online") {badgeText="Online"/**plain javascript */}

    return (
        <div className="card">
             {badgeText && <div className="card-badge">{badgeText}</div> /*render co dieu kien with plain javascript */} 
            <img className="card-logo" src={props.item.coverImg} alt="logocard"></img> 
          <div className="card-stats"> 
             <img className="starticon" src={starticon} alt="icon"></img>
             <span >{props.item.stats.rating}</span>
             <span >({props.item.stats.reviewCount})</span>
          </div> 
            <p>{props.item.title}</p>
            <p className="bold">{props.item.price} / person</p>
        </div>
             
             
            
             

            
        
        
        
    )
}