import './App.css'
import Sidebar from './sidebar/Sidebar';
import Maindash from './Mainddash/Maindash';
import { useState ,useEffect} from 'react';
import Navbar from './Navbar';
import ActivityComponent from './Recentactivity/ActivityComponent';
import ScheduleComponent from './ScheduleComponent';
function App() {
  const [isopen,setisopen]=useState(true)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 390) {
        setisopen(false);
      } else {
        setisopen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
    <div className="App">
        <div className="App-container">
         
          {isopen && <Sidebar setisopen={setisopen}/>}
          <div className="Main-content" style={{ flexGrow: 1 }}>
            <div className={!isopen && 'maint'}>
            <Navbar setisopen={setisopen}/>
            <div className='contain'>
          <Maindash />
          <div className='rdcomp'>
            <ActivityComponent isopen={isopen}/>
            <ScheduleComponent/>
            </div>
          </div>
          </div>
          
          </div>
        
        </div>
    </div>
  );
}

export default App;
