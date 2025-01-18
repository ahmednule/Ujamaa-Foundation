"use client";

import React, { useState } from 'react';
import { Box } from '@mui/material';
import DesktopNavigation from "@components/components/ui/DesktopNavigation"
import MobileNavigation from "@components/components/ui/MobileNavigation"

const NavigationMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <DesktopNavigation />
      <MobileNavigation isOpen={mobileOpen} onToggle={toggleMobileMenu} />
    </Box>
  );
};

export default NavigationMenu;
