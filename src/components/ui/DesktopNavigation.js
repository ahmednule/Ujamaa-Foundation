import React, { useState } from 'react';
import { Box, Button, Popover, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import pages from "@components/lib/pages"

const DesktopNavigation = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
      {pages.map((page) => (
        page.subMenu ? (
          <div key={page.label}>
            <Button
              onClick={handleMenuOpen}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: '#000',
                fontWeight: pathname.startsWith(page.path) ? 'bold' : 'normal',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              {page.label}
            </Button>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <Box sx={{ py: 1 }}>
                {page.subMenu.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={Link}
                    href={item.path}
                    onClick={handleMenuClose}
                    sx={{
                      py: 1.5,
                      px: 2,
                      '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                      fontWeight: pathname === item.path ? 'bold' : 'normal',
                    }}
                  >
                    {item.fullName || item.label}
                  </MenuItem>
                ))}
              </Box>
            </Popover>
          </div>
        ) : (
          <Button
            key={page.label}
            component={Link}
            href={page.path}
            sx={{
              color: '#000',
              fontWeight: pathname === page.path ? 'bold' : 'normal',
              '&:hover': { backgroundColor: 'transparent' },
            }}
          >
            {page.label}
          </Button>
        )
      ))}
    </Box>
  );
};

export default DesktopNavigation;
