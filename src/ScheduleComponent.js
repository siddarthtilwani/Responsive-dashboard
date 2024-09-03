import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography, Grid, Divider } from "@mui/material";

const ScheduleComponent = () => {
  const [scheduleCreated, setScheduleCreated] = useState(false);

  const prioritySchedule = [
    { task: "Review candidate applications", time: "11.30 AM" },
  ];

  const otherSchedules = [
    { task: "Interview with candidates", time: "10.30 AM" },
    { task: "Short meeting with product designer from IT Department", time: "09.15 AM" },
  ];

  const handleCreateSchedule = () => {
    setScheduleCreated(true);
    alert("New Schedule Created!");
  };

  return (
    <Box sx={{ width: '80%', mx: "auto", mt: 3, p: 2, borderRadius: "12px", boxShadow: 3, backgroundColor: "#fff" }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Upcoming Schedule
      </Typography>

      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Today, 13 Sep 2021
        </Typography>
      </Grid>

      <Typography variant="subtitle2" gutterBottom>
        Priority
      </Typography>
      <Card sx={{backgroundColor:"#FAFAFA", mb: 2}}>
        <CardContent>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {prioritySchedule[0].task}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Today - {prioritySchedule[0].time}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="subtitle2" gutterBottom>
        Other
      </Typography>

      {otherSchedules.map((schedule, index) => (
        <Card sx={{backgroundColor:"#FAFAFA", mb: 2 }} key={index}>
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {schedule.task}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Today - {schedule.time}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Button
        variant="contained"
        color="white"
        fullWidth
        onClick={handleCreateSchedule}
        sx={{ mt: 3, borderRadius: 3 }}
        style={{color:'red'}}
      >
        Create a New Schedule
      </Button>

      {scheduleCreated && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" color="primary">
            New schedule added successfully!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ScheduleComponent;
