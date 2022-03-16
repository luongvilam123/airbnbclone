
import starticon from "../images/starticon.png"
export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {badgeText= "Sold Out"}
    else if (props.location ==="Online") {badgeText="Online"}

    return (
        <div className="card">
             {badgeText && <div className="card-badge">{badgeText}</div> /*render co dieu kien */} 
            <img className="card-logo" src={props.image} alt="logocard"></img> 
          <div className="card-stats"> 
             <img className="starticon" src={starticon} alt="icon"></img>
             <span >{props.rating}</span>
             <span >({props.reviewCount})</span>
             
             <span className="gray">{props.country}</span>
          </div> 
             
            <p>{props.title}</p>
            <p className="bold">{props.price} / person</p>
        </div>

            
        
        
        
    )
}