import { Box, Button, Paper, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Grid from '@mui/material/Grid2';

export const Home = () => {
  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: 2 }}>
      {/* Sidebar */}
      <Grid size={3}>
        <Paper
          elevation={3}
          sx={{
            height: '100%',
            borderRadius: 2,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Sidebar Content */}
          <Box>
            <Typography variant='h5' sx={{ mb: 3 }}>
              Home
            </Typography>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Google Calendar
            </Typography>
            <Button
              variant='contained'
              color='primary'
              startIcon={<CalendarMonthIcon />}
              fullWidth
              sx={{ mb: 2 }}
            >
              Sync Calendar
            </Button>
            <Button variant='contained' color='secondary' startIcon={<TaskAltIcon />} fullWidth>
              Tasks
            </Button>
          </Box>
          <Typography variant='caption' align='center'>
            © 2024 Task Manager
          </Typography>
        </Paper>
      </Grid>

      {/* Main Content */}
      <Grid size={9}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Calendar Section */}
          <Paper elevation={3} sx={{ borderRadius: 2, padding: 2 }}>
            <Typography variant='h5'>Calendar</Typography>
            {/* Add your calendar UI here */}
            <Box sx={{ height: 300, mt: 2 }}>Calendar UI</Box>
          </Paper>

          {/* Task Section */}
          <Paper elevation={3} sx={{ borderRadius: 2, padding: 2, mt: 2 }}>
            <Typography variant='h5'>Tasks</Typography>
            {/* Add your task UI here */}
            <Box sx={{ mt: 2 }}>Task List</Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};
