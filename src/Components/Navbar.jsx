import React, { useState } from "react";
import logo from "../Assets/Pictures/logo.png";
import {
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  Divider,
  Tab,
  Tabs,
} from "@mui/material";
import { Settings, Clear, Menu } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Zoom } from "@mui/material";
import SettingsDrawer from "./Drawers/SettingsDrawer";

const Navbar = ({ onSetChoice, onChoice }) => {
  const [settingsDrawer, setSettingsDrawer] = useState({ right: false });
  const [mobLinksDrawer, setMobLinksDrawer] = useState({ right: false });
  const [langIndex, setLangIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const toggleSettingsDrawer = (open) => {
    setSettingsDrawer({ right: open });
  };

  const toggleLinksDrawer = (openL) => {
    setMobLinksDrawer({ right: openL });
  };

  const handleLanguageChange = (index) => {
    setLangIndex(index);
  };

  const handleChoiceChange = (newChoice) => {
    onSetChoice(newChoice.currentTarget.value);
  };

  const handleChangeTabs = (e, newIndex) => {
    setTabIndex(newIndex);
  };
  return (
    <Box component="nav" bgcolor="custom.navbarBgColor">
      <section className="container df ai-c jc-sb">
        <img className="logo" src={logo} alt="Medical logo" />
        <Box className="hide-in-mobile">
          <Tabs onChange={handleChangeTabs} value={tabIndex}>
            <Tab label="Home" disableTouchRipple />
            <Tab label="About" disableTouchRipple />
            <Tab label="Product" disableTouchRipple />
            <Tab label="Contact" disableTouchRipple />
          </Tabs>
        </Box>
        <div className="controls">
          <div className="mobile-links hide-in-desktop">
            <Tooltip title="Links" TransitionComponent={Zoom} arrow>
              <IconButton
                onClick={() => {
                  toggleLinksDrawer(true);
                }}
              >
                <Menu />
              </IconButton>
            </Tooltip>
            <Drawer
              anchor="right"
              open={mobLinksDrawer.right}
              transitionDuration={400}
              onClose={() => {
                toggleLinksDrawer(false);
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
                    Navigate to
                  </Typography>
                  <IconButton
                    onClick={() => {
                      toggleLinksDrawer(false);
                    }}
                  >
                    <Clear />
                  </IconButton>
                </Box>

                <Divider variant="fullWidth" />
                <Box className="hide-in-desktop" padding="20px">
                  <Tabs
                    onChange={handleChangeTabs}
                    value={tabIndex}
                    orientation="vertical"
                  >
                    <Tab label="Home" disableTouchRipple />
                    <Tab label="About" disableTouchRipple />
                    <Tab label="Product" disableTouchRipple />
                    <Tab label="Contact" disableTouchRipple />
                  </Tabs>
                </Box>
              </Box>
            </Drawer>
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
            <SettingsDrawer
              onOpen={settingsDrawer.right}
              onToggle={toggleSettingsDrawer}
              onChoice={onChoice}
              onSetChoice={onSetChoice}
              onChange={handleChoiceChange}
              langIndex={langIndex}
              onChangeLanguage={handleLanguageChange}
            />
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Navbar;
