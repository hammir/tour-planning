import { useState } from "react";
import './Card.css';

function Card(props)
{
    const [readmore,setReadMore] =useState(false);
    const description= readmore ? props.info : `${props.info.substring(0,200)}....`;

    function readmoreHandler()
    {
        setReadMore(!readmore);
    }
    
  
return (
    <div className="card">

    {/* Image */}
    <img src={props.image} className="image" alt=""></img>

    <div className="tour-info">
    
    <div className="tour-details">
        
        {/* Price */}
        <h4 className="tour-price"> ₹{props.price}</h4>
        
        {/* Name of the place */}
        <h4 className="tour-name">{props.name}</h4>
    </div>

    {/* Description of place */}
    <div className="tour-desc"> {description}

    {/* Read more link */}
    <span className="read-more" onClick={readmoreHandler}>
    {readmore ? `show less` : `read more`}
    </span>

    </div>

    </div>
    
    {/* Button to remove Card */}
    <button className="btn-red " onClick={()=> props.removeTour(props.id)}> {/*Sending back the id of place to removeTour function present in App.js  */}
     Not Intrested
    </button>

    </div>
)
}

export default Card;