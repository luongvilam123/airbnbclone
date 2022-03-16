
import starticon from "../images/starticon.png"
export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {badgeText= "Sold Out"}
    else if (props.location ==="Online") {badgeText="Online"/**plain javascript */}

    return (
        <div className="card">
             {badgeText && <div className="card-badge">{badgeText}</div> /*render co dieu kien with plain javascript */} 
            <img className="card-logo" src={props.coverImg} alt="logocard"></img> 
          <div className="card-stats"> 
             <img className="starticon" src={starticon} alt="icon"></img>
             <span >{props.stats.rating}</span>
             <span >({props.stats.reviewCount})</span>
          </div> 
            <p>{props.title}</p>
            <p className="bold">{props.price} / person</p>
        </div>
             
             
            
             

            
        
        
        
    )
}