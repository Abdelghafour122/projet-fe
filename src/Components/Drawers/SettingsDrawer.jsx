import {
  Clear,
  DarkMode,
  DisplaySettings,
  LightMode,
} from "@mui/icons-material";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SettingsDrawer = ({
  onOpen,
  onToggle,
  onChoice,
  onChange,
  onChangeLanguage,
  langIndex,
}) => {
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
            Settings
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
        <Box component="div" className="df fd-c ai-fs jc-sb" padding="20px">
          <Typography component="p" variant="p" marginBottom="15px">
            Mode
          </Typography>
          <ToggleButtonGroup
            exclusive
            fullWidth
            value={onChoice}
            onChange={onChange}
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
        <Box component="div" className="df fd-c ai-fs jc-sb" padding="20px">
          <Typography component="p" variant="p" marginBottom="15px">
            Language
          </Typography>
          <List>
            <ListItemButton
              selected={langIndex === 0}
              onClick={() => {
                onChangeLanguage(0);
              }}
            >
              <ListItemText primary="English" />
            </ListItemButton>
            <Divider variant="fullWidth" />
            <ListItemButton
              selected={langIndex === 1}
              onClick={() => {
                onChangeLanguage(1);
              }}
            >
              <ListItemText primary="Français" />
            </ListItemButton>
            <Divider variant="fullWidth" />
            <ListItemButton
              selected={langIndex === 2}
              onClick={() => {
                onChangeLanguage(2);
              }}
            >
              <ListItemText primary="العربية" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
