import { Button } from "@mui/material";
import React from "react";
import { ArrowBackTwoTone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const GoHomeButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      size="large"
      color="warning"
      startIcon={<ArrowBackTwoTone />}
      onClick={() => navigate("projet-fe")}
    >
      Go Home
    </Button>
  );
};

export default GoHomeButton;
