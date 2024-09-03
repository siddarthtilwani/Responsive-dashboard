import React from "react";
import './Cardbig.css'

const Cardbig=(props)=>{
    return(
        <div  className="Cardbig">
         <div className="details">
         <span style={{fontWeight:"bold"}}>{props.heading}</span>
            <span style={{fontWeight:"bold"}}>{props.count}</span>
            <span >{props.men} Men</span>
            <span>{props.women} Women</span>
       
         </div>
         <div className="graph">
          {props.graphcomponent}
          <div style={{backgroundColor:props.bgclr}} className="graph-detail">{props.data}</div>
         </div>
        </div>
    )
}
export default Cardbig;