import { ArrowRightAltTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const LearnMoreButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      endIcon={<ArrowRightAltTwoTone />}
      color="info"
    >
      Learn more
    </Button>
  );
};

export default LearnMoreButton;
