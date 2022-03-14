
import starticon from "../images/starticon.png"
export default function Card(props){
    console.log(props)
    return (
        <div className="card">
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