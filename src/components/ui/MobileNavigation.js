import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import pages from "@components/lib/pages";

const MobileNavigation = ({ isOpen, onToggle }) => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSubMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleSubMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton onClick={onToggle} sx={{ color: '#000' }}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 64, left: 0 }}
        open={isOpen}
        onClose={onToggle}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '100%',
            mt: 0,
            boxShadow: 'none',
            borderTop: '1px solid rgba(0,0,0,0.1)',
          },
        }}
      >
        {pages.map((page) => (
          page.subMenu ? (
            <Box key={page.label}>
              <MenuItem
                onClick={handleSubMenuOpen}
                sx={{
                  py: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                {page.label}
                <KeyboardArrowDownIcon />
              </MenuItem>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleSubMenuClose}
              >
                {page.subMenu.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={Link}
                    href={item.path}
                    onClick={() => {
                      handleSubMenuClose();
                      onToggle();
                    }}
                    sx={{
                      py: 2,
                      px: 4,
                      borderBottom: '1px solid rgba(0,0,0,0.1)',
                    }}
                  >
                    {item.fullName || item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <MenuItem
              key={page.label}
              component={Link}
              href={page.path}
              onClick={onToggle}
              sx={{
                py: 2,
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                fontWeight: pathname === page.path ? 'bold' : 'normal',
              }}
            >
              {page.label}
            </MenuItem>
          )
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNavigation;
