"use client"
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from './Logo';
import NavigationMenu from './Menu';

const Header = () => {
  return (
    <AppBar position="static" sx={{backgroundColor:"#e6e6e6"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Logo />
          </div>

          <NavigationMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
