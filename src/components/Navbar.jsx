import React from 'react';
import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from '@mui/material';
import ThemeToggleButton from './ThemeToggleButton';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "1.4rem" }}
        >
          Loan Calculator
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            onClick={() => navigate("/")}
            color="inherit"
            sx={{
              fontSize: "1.1rem",
              borderBottom: isActive("/") ? "2px solid white" : "none",
              borderRadius: 0
            }}
          >
            Home
          </Button>

          <Button
            onClick={() => navigate("/Exchange_rates_live")}
            color="inherit"
            sx={{
              fontSize: "1.1rem",
              borderBottom: isActive("/Exchange_rates_live") ? "2px solid white" : "none",
              borderRadius: 0
            }}
          >
            Exchange Rates (Live)
          </Button>

          <Button
            onClick={() => navigate("/about")}
            color="inherit"
            sx={{
              fontSize: "1.1rem",
              borderBottom: isActive("/about") ? "2px solid white" : "none",
              borderRadius: 0
            }}
          >
            About
          </Button>

          <Button
            onClick={() => navigate("/Error")}
            color="inherit"
            sx={{
              fontSize: "1.1rem",
              borderBottom: isActive("/Error") ? "2px solid white" : "none",
              borderRadius: 0
            }}
          >
            Error Page
          </Button>

          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
