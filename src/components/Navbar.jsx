import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from '@mui/material';
import ThemeToggleButton from './ThemeToggleButton';

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="white">Home</Button>
          <Button color="white">Exchange Rates (Live)</Button>
          <Button color="white">About</Button>
          <Button color="white">error page</Button>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar