import React from "react";
import './Cards.css'

const Cards=(props)=>{
    return(
        <div style={{backgroundColor:props.bgclr}}  className="Card">
            <span>{props.heading}</span>
            <span>{props.count}</span>
            <span style={{color:props.txtclr}}>{props.requirements}</span>
       
        </div>
    )
}
export default Cards;