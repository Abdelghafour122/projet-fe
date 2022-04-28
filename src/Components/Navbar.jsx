import React, { useState } from "react";
import logo from "../Assets/Pictures/logo.png";
import {
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Zoom } from "@mui/material";
import theme from "../styles";

const Navbar = () => {
  const [settingsDrawer, setSettingsDrawer] = useState({ right: false });
  const toggleSettingsDrawer = (open) => {
    setSettingsDrawer({ right: open });
  };
  return (
    <ThemeProvider theme={theme}>
      <nav>
        <section className="container df ai-c jc-sb">
          <img className="logo" src={logo} alt="Medical logo" />
          <ul className="desktop-links-list hide-in-mobile df ai-c jc-c">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
          <div className="controls">
            <div className="ham-menu hide-in-desktop">
              <ul className="desktop-links-list hide-in-desktop df ai-c jc-sb fd-c">
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="settings-list">
              <Tooltip title="Settings" TransitionComponent={Zoom} arrow>
                <IconButton
                  onClick={() => {
                    toggleSettingsDrawer(true);
                  }}
                >
                  <Settings />
                </IconButton>
              </Tooltip>
              <Drawer
                anchor="right"
                open={settingsDrawer.right}
                transitionDuration={400}
                onClose={() => {
                  toggleSettingsDrawer(false);
                }}
              >
                <Box
                  sx={{
                    bgcolor: "hsl(196, 81%, 29%)",
                    width: "300px",
                    height: "100%",
                    color: "white",
                  }}
                >
                  MENU
                </Box>
              </Drawer>
            </div>
          </div>
        </section>
      </nav>
      <Typography variant="h1" color="text.primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Typography>
      <Typography variant="h1" color="text.primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Typography>
      <Typography variant="h1" color="text.primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Typography>
      <Typography variant="h1" color="text.primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Typography>
    </ThemeProvider>
  );
};

export default Navbar;
