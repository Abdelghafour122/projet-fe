import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Search, ContentPasteSearch } from "@mui/icons-material";
import vitaminsSupps from "../Assets/Pictures/vitaminsSupps.webp";

const HomePage = () => {
  return (
    <Box component="section" className="landingpage">
      <Box component="section" className="homepage">
        <section className="hero container df fd-c ai-fs jc-sb">
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
              sx={{ marginRight: "25px" }}
              color="primary"
              disableElevation
              size="medium"
              endIcon={<ContentPasteSearch />}
            >
              Book an Appointment
            </Button>
            <Button
              variant="contained"
              bgcolor="primary"
              disableElevation
              size="medium"
              endIcon={<Search />}
            >
              Explore the Symptoms
            </Button>
          </Box>
        </section>
      </Box>
      <Box component="section" variant="section" bgcolor="custom.secondBgColor">
        <section className="about-us container df fd-c ai-c">
          <Typography component="h1" variant="h1" color="text.primary">
            Why Choose CLINICAL
          </Typography>
          <img src={vitaminsSupps} alt="Explore by supplements" />
        </section>
      </Box>
    </Box>
  );
};

export default HomePage;
