import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HexagonIcon from '@mui/icons-material/Hexagon';
import LogoutIcon from '@mui/icons-material/Logout';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image'
import logo from "../public/logo-elevar.svg"
// import { AppBar, Box, Divider, Drawer, IconButton, inboxIcon, List, ListItem, } from '@mui/material/'

const drawerWidth = 240;

function Sidebar(props) {
  const { window, component } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = [{
    name: 'Questions',
    link: '/questions_list'
  }, {
    name: 'Settings',
    link: '/question_details'
  }, {
    name: 'Logout',
    link: '/'
  }]

  const drawer = (
    <div>
      <div style={{ maxWidth: '160px', margin: '10px auto' }}>
        <Image src={logo} />
      </div>
      <Divider />
      <List>
        {links.map((v, index) => (
          <a href={v.link} >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <WorkspacesIcon />}
                  {index === 1 && <HexagonIcon />}
                  {index === 2 && <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={v.name} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: 'transparent',
            height: '80px',
            boxShadow: 'none'
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ margin: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold' }}>
              Questions
            </Typography>
            <Chip avatar={<Avatar>M</Avatar>} label="Dr. Maria Baus" />
          </div>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          { component }
        </Box>
      </Box>
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
