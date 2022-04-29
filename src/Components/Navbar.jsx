import React, { useState } from "react";
import logo from "../Assets/Pictures/logo.png";
import {
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  Divider,
} from "@mui/material";
import {
  Settings,
  Clear,
  LightMode,
  DarkMode,
  DisplaySettings,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import {
  Zoom,
  ToggleButton,
  ToggleButtonGroup,
  ListItemText,
  ListItemButton,
  List,
} from "@mui/material";

const Navbar = ({ onSetChoice, onChoice }) => {
  const [settingsDrawer, setSettingsDrawer] = useState({ right: false });
  // const [choice, setChoice] = useState("System");
  // const [language, setLanguage] = useState("English");
  const [langIndex, setLangIndex] = useState(0);

  const handleLanguageChange = (newLanguage, index) => {
    // console.log(newLanguage.target.textContent);
    // setLanguage()
    setLangIndex(index);
  };

  const handleChoiceChange = (newChoice) => {
    onSetChoice(newChoice.currentTarget.value);
  };

  const toggleSettingsDrawer = (open) => {
    setSettingsDrawer({ right: open });
  };
  return (
    // make a ternary for themes, use usememo, see device preferences too
    <Box component="nav" bgcolor="custom.navbarBgColor">
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
                bgcolor="custom.firstBgColor"
                sx={{
                  width: "350px",
                  height: "100%",
                  fontFamily: "Poppins",
                }}
              >
                <Box component="div" className="df ai-c jc-sb" padding="20px">
                  <Typography component="p" variant="p">
                    Settings
                  </Typography>
                  <IconButton
                    onClick={() => {
                      toggleSettingsDrawer(false);
                    }}
                  >
                    <Clear />
                  </IconButton>
                </Box>
                <Divider variant="fullWidth" />
                <Box
                  component="div"
                  className="df fd-c ai-fs jc-sb"
                  padding="20px"
                >
                  <Typography component="p" variant="p" marginBottom="15px">
                    Mode
                  </Typography>
                  <ToggleButtonGroup
                    exclusive
                    fullWidth
                    value={onChoice}
                    onChange={handleChoiceChange}
                  >
                    <ToggleButton value="Light">
                      <LightMode sx={{ marginRight: "10px" }} />
                      Light
                    </ToggleButton>
                    <ToggleButton value="Dark">
                      <DarkMode sx={{ marginRight: "10px" }} />
                      Dark
                    </ToggleButton>
                    <ToggleButton value="System">
                      <DisplaySettings sx={{ marginRight: "10px" }} />
                      System
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <Box
                  component="div"
                  className="df fd-c ai-fs jc-sb"
                  padding="20px"
                >
                  <Typography component="p" variant="p" marginBottom="15px">
                    Language
                  </Typography>
                  <List>
                    <ListItemButton
                      selected={langIndex === 0}
                      onClick={(e) => {
                        handleLanguageChange(e, 0);
                      }}
                    >
                      <ListItemText primary="English" />
                    </ListItemButton>
                    <Divider variant="fullWidth" />
                    <ListItemButton
                      selected={langIndex === 1}
                      onClick={(e) => {
                        handleLanguageChange(e, 1);
                      }}
                    >
                      <ListItemText primary="Français" />
                    </ListItemButton>
                    <Divider variant="fullWidth" />
                    <ListItemButton
                      selected={langIndex === 2}
                      onClick={(e) => {
                        handleLanguageChange(e, 2);
                      }}
                    >
                      <ListItemText primary="العربية" />
                    </ListItemButton>
                  </List>
                </Box>
              </Box>
            </Drawer>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Navbar;
