import react, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../src/imgs/logo.png'
import { Sidebarmainmenudata } from '../data/Sidebarmainmenudata';
import { Sidebarotherdata } from '../data/Sidebarotherdata';
const Sidebar=()=>{
    const [selected,setselected]=useState("Dashboard")
    return(
       <div className='sidebar'>
            <div className='logo'>
                <img className='logo-img' src={Logo}/>
            </div>
            <span className='txt'>MAIN MENU</span>
            <div className='menu'>
                {Sidebarmainmenudata.map((item,index)=>{
                    return(
                        <div className={selected===item.heading?'menuitem active':'menuitem'} key={index} onClick={()=>setselected(item.heading)}>
                            <item.icon/> 
                            <span>{item.heading}</span>
                        </div>)
})}
            </div>
            <span className='txt'>OTHER</span>
            <div className='menu'>
                {Sidebarotherdata.map((item,index)=>{
                    return(
                        <div className={selected==item.heading?'menuitem active':'menuitem'} key={index} onClick={()=>setselected(item.heading)}>
                          <item.icon/> 
                          <span>{item.heading}</span>
                            </div>
                    )
                })}
            </div>
       </div>

    )
}
export default Sidebar;