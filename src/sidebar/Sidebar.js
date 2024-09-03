import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import Logo from '../../src/imgs/logo.png';
import { Sidebarmainmenudata } from '../data/Sidebarmainmenudata';
import { Sidebarotherdata } from '../data/Sidebarotherdata';

const Sidebar = ({ setisopen }) => {
  const [selected, setselected] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='sidebar'>
      <div className='logo'>
        <img className='logo-img' src={Logo} alt='logo'/>
        {isMobile && <button className='close-btn' onClick={() => setisopen(false)}>X</button>}
      </div>

      <span className='txt'>MAIN MENU</span>
      <div className='menu'>
        {Sidebarmainmenudata.map((item, index) => {
          return (
            <div 
              className={selected === item.heading ? 'menuitem active' : 'menuitem'} 
              key={index} 
              onClick={() => setselected(item.heading)}
            >
              <item.icon /> 
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>

      <span className='txt'>OTHER</span>
      <div className='menu'>
        {Sidebarotherdata.map((item, index) => {
          return (
            <div 
              className={selected === item.heading ? 'menuitem active' : 'menuitem'} 
              key={index} 
              onClick={() => setselected(item.heading)}
            >
              <item.icon /> 
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
