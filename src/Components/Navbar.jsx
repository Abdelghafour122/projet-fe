import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import logo from "../Assets/Pictures/logo.png";
import { IconButton, Tooltip, Tab, Tabs } from "@mui/material";
import { Settings, Menu } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Zoom } from "@mui/material";
import SettingsDrawer from "./Drawers/SettingsDrawer";
import LinksDrawer from "./Drawers/LinksDrawer";

const Navbar = ({ onSetChoice, onChoice }) => {
  const { t } = useTranslation();

  const [direction, setDirection] = useState(
    document.querySelector("html").dir
  );

  const [settingsDrawer, setSettingsDrawer] = useState(
    direction === "ltr"
      ? { right: false }
      : direction === "rtl" && { right: false }
  );
  const [mobLinksDrawer, setMobLinksDrawer] = useState({ right: false });
  const [langIndex, setLangIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  let navigate = useNavigate();
  useEffect(() => {
    // if (langIndex === 0 || langIndex === 1) {
    //   document.querySelector("html").dir = "ltr";
    //   setDirection("ltr");
    // } else if (langIndex === 2) {
    //   document.querySelector("html").dir = "rtl";
    //   setDirection("rtl");
    // }
    if (langIndex === 0) {
      document.querySelector("html").dir = "ltr";
      setDirection("ltr");
      i18next.changeLanguage("en");
      document.title = t("App_title");
    } else if (langIndex === 1) {
      document.querySelector("html").dir = "ltr";
      setDirection("ltr");
      i18next.changeLanguage("fr");
      document.title = t("App_title");
    } else if (langIndex === 2) {
      document.querySelector("html").dir = "rtl";
      setDirection("rtl");
      i18next.changeLanguage("ar");
      document.title = t("App_title");
    }
  }, [langIndex, t]);

  const toggleSettingsDrawer = (open) => {
    setSettingsDrawer(
      direction === "ltr"
        ? { right: open }
        : direction === "rtl" && { left: open }
    );
  };

  const toggleLinksDrawer = (openL) => {
    setMobLinksDrawer(
      direction === "ltr"
        ? { right: openL }
        : direction === "rtl" && { left: openL }
    );
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
              onOpen={
                direction === "ltr"
                  ? mobLinksDrawer.right
                  : direction === "rtl" && mobLinksDrawer.left
              }
              onToggle={toggleLinksDrawer}
              tabIndex={tabIndex}
              onChangeTabs={handleChangeTabs}
              direction={direction}
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
              onOpen={
                direction === "ltr"
                  ? settingsDrawer.right
                  : direction === "rtl" && settingsDrawer.left
              }
              onToggle={toggleSettingsDrawer}
              onChoice={onChoice}
              onSetChoice={onSetChoice}
              onChange={handleChoiceChange}
              langIndex={langIndex}
              onChangeLanguage={handleLanguageChange}
              direction={direction}
            />
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Navbar;
