// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { Home } from '@mui/icons-material';
// import { Stack } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// function Navbar() {
// const [anchorEl, setAnchorEl] = React.useState(null);
// const open = Boolean(anchorEl);

// const handleClick = (e) => {
//   setAnchorEl(e.currentTarget);
// };

// const handleClose = () => {
//   setAnchorEl(null);
// };

//   return (
//     <AppBar position="fixed" sx={{ backgroundColor: '#5c6bc0' }}>
//       <Toolbar>
// <IconButton size="large" edge="start" color="inherit" aria-label="logo">
//   <Home />
// </IconButton>
// <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//   Elite.
// </Typography>
// <Stack direction="row" spacing={2}>
//   <Button color="inherit">Home</Button>
//   <Button color="inherit">About</Button>
//   <Button
//     color="inherit"
//     id="features-btn"
//     onClick={handleClick}
//     aria-controls={open ? 'features-menu' : undefined}
//     aria-haspopup="true"
//     aria-expanded={open ? 'true' : undefined}
//     endIcon={<ArrowDropDownIcon />}
//   >
//     Features
//   </Button>
//   <Button color="inherit">Prices</Button>
//   <Button color="inherit">Contact</Button>
// </Stack>
// <Menu
//   id="features-menu"
//   anchorEl={anchorEl}
//   open={open}
//   MenuListProps={{
//     'aria-labelledby': 'features-btn',
//   }}
//   onClose={handleClose}
//   anchorOrigin={{
//     vertical: 'bottom',
//     horizontal: 'right',
//   }}
//   transformOrigin={{
//     vertical: 'top',
//     horizontal: 'right',
//   }}
// >
//   <MenuItem onClick={handleClose}>Blog</MenuItem>
//   <MenuItem onClick={handleClose}>Podcast</MenuItem>
// </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default Navbar;

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import { Home } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const CustomStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 2,
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#5c6bc0' }}>
      <StyledToolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Home />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Elite.
        </Typography>
        <CustomStack>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Company</Button>
          <Button color="inherit">About</Button>
        </CustomStack>
        <UserBox onClick={(e) => setOpen(true)}>
          <MenuIcon sx={{ width: 30, height: 30 }} />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="fade-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Companies</MenuItem>
        <MenuItem>Features</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
