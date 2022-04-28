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
import lightTheme from "../lightThemeStyle";
import darkTheme from "../darkThemeStyle";

const Navbar = () => {
  const [settingsDrawer, setSettingsDrawer] = useState({ right: false });
  const toggleSettingsDrawer = (open) => {
    setSettingsDrawer({ right: open });
  };
  return (
    // make a ternary for themes, use usememo, see device preferences too
    <ThemeProvider theme={lightTheme}>
      <Box component="nav" bgcolor="custom.mainBgColor">
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
      </Box>
      <Typography variant="h1" color="custom.headingColor">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Typography>
      {/* <Typography variant="h1" color="text.primary">
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
      <Typography variant="h1" color="text.primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Typography>
      <Typography variant="h1" color="text.primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Typography> */}
      <Typography component="p" variant="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam
        tempore labore sed illo blanditiis eligendi animi ipsam nihil eum
        temporibus consequatur culpa quo, neque repellendus dolore officia
        suscipit quod! Et officiis molestiae quo, aliquid incidunt quod quos
        ratione necessitatibus quis quasi facilis, earum praesentium? Tenetur
        non accusantium veritatis similique nisi praesentium, quasi a quae dolor
        porro sit distinctio in! Debitis itaque suscipit quidem cupiditate?
        Recusandae alias natus eos, possimus voluptatum ducimus suscipit autem
        quae sint expedita perspiciatis accusantium laudantium repellat
        laboriosam placeat dolorum nesciunt ex pariatur rem sit ab!
      </Typography>
    </ThemeProvider>
  );
};

export default Navbar;
