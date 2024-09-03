import { display, fontSize, padding, textAlign, width } from "@mui/system";
import React, { useState } from "react";

const ActivityComponent = (props) => {
  
  const activities = [
    { time: "10.40 AM, Fri 10 Sept 2021", description: "You Posted a New Job" },
    { time: "11.15 AM, Fri 10 Sept 2021", description: "You Completed a Task" },
    { time: "12.30 PM, Fri 10 Sept 2021", description: "You Received a Message" },
    
  ];

  const [showAllActivities, setShowAllActivities] = useState(false);

  const handleShowAllClick = () => {
    setShowAllActivities(!showAllActivities);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Recently Activity</h3>
      <div style={styles.par}>
        <p style={styles.time}>{activities[0].time}</p>
        <h3 style={styles.activityTitle}>{activities[0].description}</h3>
        <p style={styles.subtext}>
          Kindly check the requirements and terms of work and make sure everything is right.
        </p>
      </div>
      <div style={styles.activebtn}>
        <p style={(props.isopen)?styles.activitiesCount:styles.activitiesCountclose} >Today you makes 12 Activity</p>
        <button style={styles.button} onClick={handleShowAllClick}>
          See All Activity
        </button>
      </div>

      {showAllActivities && (
        <div style={styles.activitiesList}>
          <h3>All Activities:</h3>
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>
                <strong>{activity.time}</strong> - {activity.description}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1B204A",
    color: "#fff",
    padding: "0  ",

    width: '88%',
    margin: "0 auto",
    borderRadius: '12px',

    textAlign: "center",
  },
  par: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '1.5rem'
  },
  activebtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    width: "100%",
    
  },
  title: {

    marginBottom: "10px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",


    backgroundColor: "#161E54",
    height: '3rem',
    width: '100%',
    borderRadius: '12px 12px 0px 0px',
  },
  time: {
    fontSize: "12px",
    margin: "10px 0",
  },
  activityTitle: {
    fontSize: "20px",
    margin: "10px 0",
  },
  subtext: {
    fontSize: "14px",
    margin: "10px 0",
    textAlign: 'left'
  },
  activitiesCount: {
    
    marginBottom: "20px",
    marginLeft: '0.7rem',
    fontSize:'12px'
  },
  activitiesCountclose:{

    marginBottom: "20px",
    marginLeft: '0.7rem',
    fontSize:'16px'
  },
  button: {
    backgroundColor: "#FF4C61",
    fontSize: '10px',
    border: "none",
    padding: "10px 20px",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: '.5rem',

  },
  activitiesList: {
    marginTop: "20px",
    textAlign: "left",
  },
};

export default ActivityComponent;
