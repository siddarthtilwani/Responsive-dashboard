// Announcements.js
import React, { useState } from 'react';
import announcements from './Announcementdata'; // Import the announcements array
import Anncard from './Anncard';
import './Announcement.css'
const Announcement = () => {
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(3); // State to manage the number of visible announcements

  // Function to handle showing all announcements
  const showAllAnnouncements = () => {
    setVisibleAnnouncements(announcements.length);
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="announcements-container">
      <div className='date'>
      <h2>Announcements</h2>
      <p >{formattedDate}</p>
      </div>
      {/* Display the announcements */}
    <div className='content'>
    {announcements.slice(0, visibleAnnouncements).map((announcement) => (
       <Anncard time={announcement.time} content={announcement.content} />
      ))}
    </div>

      {/* "See All" button */}
      {
        <button className='btn content' onClick={()=>(visibleAnnouncements===announcements.length)?setVisibleAnnouncements(4):setVisibleAnnouncements(announcements.length)}>{visibleAnnouncements===announcements.length ?'Hide All Announcements' :'See All Announcements'}</button>
      }
    </div>
  );
};

export default Announcement;
