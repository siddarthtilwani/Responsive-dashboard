import React, { useState } from "react";
import doticon from '../imgs/doticon.png'
import pinicon from '../imgs/pinicon.png'
import './Announcement.css';
const Anncard=(props)=>{
    const [ispin,setispin]=useState(false);
    return(
       <div className="announcement">
        <div className="data">
        <span style={{fontWeight:"bold",color:"#303030"}}>{props.content}</span>
        <span style={{color:"#686868"}}>{props.time}</span>
        </div>
        <div className="dots"><img src={pinicon} onClick={()=>setispin(!ispin)} style={{filter:(ispin)&&'invert(100%)'}} alt="pin"/>
        <img src={doticon} alt="dots"/></div>

       </div>
    )
}
export default Anncard;
