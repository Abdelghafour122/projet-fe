import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box component="section" className="homepage">
      <section className="container df fd-c ai-fs jc-sb">
        <Typography component="h1" variant="h1" color="text.primary">
          A Great Place To Recieve Care
        </Typography>
        <Typography variant="p" component="p" color="text.primary">
          Our clinic offers one of the best medical treatments worldwide. With
          our team of highly experienced and specialized doctors and surgeons,
          you are in very safe hands.
        </Typography>

        <Box component="section">
          <Button
            variant="contained"
            sx={{ marginRight: "30px" }}
            color="primary"
            disableElevation
            size="large"
          >
            Book an Appointment
          </Button>
          <Button
            variant="contained"
            bgcolor="primary"
            disableElevation
            size="large"
          >
            Explore the Symptoms
          </Button>
        </Box>
      </section>
    </Box>
  );
};

export default HomePage;
