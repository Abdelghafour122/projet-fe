import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Pictures/logo.png";
import { IconButton, Tooltip, Tab, Tabs } from "@mui/material";
import { Settings, Menu } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Zoom } from "@mui/material";
import SettingsDrawer from "./Drawers/SettingsDrawer";
import LinksDrawer from "./Drawers/LinksDrawer";

const Navbar = ({ onSetChoice, onChoice }) => {
  const [settingsDrawer, setSettingsDrawer] = useState({ right: false });
  const [mobLinksDrawer, setMobLinksDrawer] = useState({ right: false });
  const [langIndex, setLangIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  let navigate = useNavigate();

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
    console.log(e.target.textContent.toLowerCase());
    const targeted = e.target.textContent.toLowerCase();
    targeted === "home"
      ? navigate("projet-fe")
      : navigate(e.target.textContent.toLowerCase());
  };
  return (
    <Box component="nav" bgcolor="custom.navbarBgColor">
      <section className="container df ai-c jc-sb">
        <img className="logo" src={logo} alt="Medical logo" />
        <Box className="hide-in-mobile">
          <Tabs onChange={handleChangeTabs} value={tabIndex}>
            <Tab label="Home" disableTouchRipple />
            <Tab label="About" disableTouchRipple />
            <Tab label="Join Us" disableTouchRipple />
            <Tab label="Contact Us" disableTouchRipple />
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
            <LinksDrawer
              onOpen={mobLinksDrawer.right}
              onToggle={toggleLinksDrawer}
              tabIndex={tabIndex}
              onChangeTabs={handleChangeTabs}
            />
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
