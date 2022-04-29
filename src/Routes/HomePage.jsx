import { Box, Typography } from "@mui/material";
import React from "react";

import image2 from "../Assets/Pictures/background2.jpg";
import image3 from "../Assets/Pictures/background3.jpg";
import image4 from "../Assets/Pictures/background4.jpg";
import image5 from "../Assets/Pictures/background5.jpg";
import image6 from "../Assets/Pictures/background6.jpg";
import image7 from "../Assets/Pictures/background7.jpg";
import image8 from "../Assets/Pictures/background8.jpg";

const IMG_ARR = [image2, image3, image4, image5, image6, image7, image8];

const HomePage = () => {
  return (
    <Box
      component="section"
      bgcolor="custom.secondBgColor"
      className="homepage"
    >
      <div className="container">
        <Typography component="h1" variant="h1" color="text.primary">
          This is the homePage
        </Typography>
      </div>
    </Box>
  );
};

export default HomePage;
