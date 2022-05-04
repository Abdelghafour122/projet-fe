import { Alert, Snackbar } from "@mui/material";
import React from "react";

const SuccessSnackbar = ({ open, handleClose, text }) => {
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
      <Alert severity="success" variant="filled" onClose={handleClose}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackbar;
