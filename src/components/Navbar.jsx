import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md")); 

  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}
          >
            Loan Calculator
          </Typography>

          {isMobileOrTablet ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250 }} role="presentation">
                  <List>
                    <ListItem
                      button
                      onClick={() => handleNavigate("/")}
                      selected={isActive("/")}
                    >
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => handleNavigate("/Exchange_rates_live")}
                      selected={isActive("/Exchange_rates_live")}
                    >
                      <ListItemText primary="Exchange Rates (Live)" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => handleNavigate("/about")}
                      selected={isActive("/about")}
                    >
                      <ListItemText primary="About" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => handleNavigate("/Error")}
                      selected={isActive("/Error")}
                    >
                      <ListItemText primary="Error Page" />
                    </ListItem>
                    <ListItem>
                      <ThemeToggleButton />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Button
                onClick={() => navigate("/")}
                color="inherit"
                sx={{
                  fontSize: "1.05rem",
                  borderBottom: isActive("/") ? "2px solid white" : "none",
                  borderRadius: 0,
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => navigate("/Exchange_rates_live")}
                color="inherit"
                sx={{
                  fontSize: "1.05rem",
                  borderBottom: isActive("/Exchange_rates_live")
                    ? "2px solid white"
                    : "none",
                  borderRadius: 0,
                }}
              >
                Exchange Rates (Live)
              </Button>
              <Button
                onClick={() => navigate("/about")}
                color="inherit"
                sx={{
                  fontSize: "1.05rem",
                  borderBottom: isActive("/about") ? "2px solid white" : "none",
                  borderRadius: 0,
                }}
              >
                About
              </Button>
              <Button
                onClick={() => navigate("/Error")}
                color="inherit"
                sx={{
                  fontSize: "1.05rem",
                  borderBottom: isActive("/Error") ? "2px solid white" : "none",
                  borderRadius: 0,
                }}
              >
                Error Page
              </Button>
              <ThemeToggleButton />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
