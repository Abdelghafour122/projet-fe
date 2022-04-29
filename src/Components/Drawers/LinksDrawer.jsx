import { Clear } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LinksDrawer = ({ onOpen, onToggle, tabIndex, onChangeTabs }) => {
  return (
    <Drawer
      anchor="right"
      open={onOpen}
      transitionDuration={400}
      onClose={() => {
        onToggle(false);
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
              onToggle(false);
            }}
          >
            <Clear />
          </IconButton>
        </Box>
        <Divider variant="fullWidth" />
        <Box className="hide-in-desktop" padding="20px">
          <Tabs onChange={onChangeTabs} value={tabIndex} orientation="vertical">
            <Tab label="Home" disableTouchRipple />
            <Tab label="About" disableTouchRipple />
            <Tab label="Product" disableTouchRipple />
            <Tab label="Contact" disableTouchRipple />
          </Tabs>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LinksDrawer;
