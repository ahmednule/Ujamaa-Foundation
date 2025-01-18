"use client"

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from './Logo';
import NavigationMenu from './Menu';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(
        (prevScrollPos > currentScrollPos) || 
        currentScrollPos < 10 
      );
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <AppBar 
      position="sticky" 
      sx={{
        backgroundColor: "#e6e6e6",
        top: 0,
        zIndex: 1200,
        transform: `translateY(${visible ? 0 : -150}px)`,
        transition: 'transform 0.3s ease-in-out',
      }}
    >
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