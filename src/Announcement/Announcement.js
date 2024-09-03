
import React, { useState } from 'react';
import announcements from './Announcementdata'; 
import Anncard from './Anncard';
import './Announcement.css'
import { Button } from '@mui/material';
const Announcement = () => {
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(3); 

  
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
     
      <div className='content'>
        {announcements.slice(0, visibleAnnouncements).map((announcement) => (
          <Anncard time={announcement.time} content={announcement.content} />
        ))}
      </div>

     
      {
        <Button
          className="btn content"
          variant="contained"
          color="white"
          fullWidth

          sx={{ mt: 3, borderRadius: 3 }}
          style={{ color: 'red' }}
          onClick={() => (visibleAnnouncements === announcements.length) ? setVisibleAnnouncements(3) : setVisibleAnnouncements(announcements.length)}>{visibleAnnouncements === announcements.length ? 'Hide All Announcements' : 'See All Announcements'}

        </Button>
      }
    </div>
  );
};

export default Announcement;
