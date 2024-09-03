import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import img1 from './imgs/img1.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Navbar({ setisopen }) {
  return (
    <AppBar color='white' position="static" sx={{ height: '64px' ,width:'100%'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Box  sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setisopen(prev => !prev)}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ ml: 1, flex: 1, color: 'inherit' }}
            />
          </Box>

       
          <IconButton color="inherit">
            <MessageIcon />
          </IconButton>

          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Photo" src={img1} />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: 'none', sm: 'block' },
              color: 'inherit',
            }}
          >
            siddarth tilwani
          </Typography>
          <KeyboardArrowDownIcon/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
