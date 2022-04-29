import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Search, ContentPasteSearch } from "@mui/icons-material";
import vitaminsSupps from "../Assets/Pictures/vitaminsSupps.webp";
import SleepYellow from "../Assets/Pictures/SleepYellow.webp";
import mentalhealthYellow from "../Assets/Pictures/mentalHealthYellow.webp";
import nutritionYellow from "../Assets/Pictures/nutritionYellow.webp";

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
          <Grid container spacing={2} columns={{ xs: 1, sm: 4, md: 16 }}>
            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={vitaminsSupps} alt="Vitamins and Supplemets" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Vitamins and Supplemets
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={SleepYellow} alt="Sleep" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Sleep Habits
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={mentalhealthYellow} alt="Mental Health" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Mental Health
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={nutritionYellow} alt="Nutrition" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Nutrition and Diet
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>
      </Box>
    </Box>
  );
};

export default HomePage;
