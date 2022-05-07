import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Favorite } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import background4 from "../Assets/Pictures/background4.jpg";
import scientist from "../Assets/Pictures/scientist.png";
import copd from "../Assets/Pictures/COPD.png";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <Box component="section" className="container">
        <section className="heading df fd-c ai-c ">
          {/* <Typography component="h1" variant="h1" color="text.primary">
            About CLINICAL
          </Typography>
          <Typography component="p" variant="p" color="text.secondary">
            Our medical center specializes in pneumology, chest and the
            respiratory system's health, we integrate clinical and hospital care
            with research and education.
          </Typography> */}

          <Typography component="h1" variant="h1" color="text.primary">
            {t("About_page.Main_heading.head")}
          </Typography>
          <Typography component="p" variant="p" color="text.secondary">
            {t("About_page.Main_heading.p")}
          </Typography>
        </section>
        <section className="doctors">
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            columns={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item md={1} className="text df fd-c ai-fs jc-c">
              <Typography component="h2" variant="h2" color="text.primary">
                {t("About_page.Team.title")}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {t("About_page.Team.p")}
              </Typography>
              {/* <Typography component="h2" variant="h2" color="text.primary">
                Our Team
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                Our team of renouned medical specialists will provide the best
                possible medical treatment, using the latest technology and the
                most sophisticated healthcare methods.
              </Typography> */}
            </Grid>
            <Grid item md={1} className="image">
              <img src={background4} alt="Doctor" />
            </Grid>
          </Grid>
        </section>
        <section className="science">
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            columns={{ xs: 1, sm: 2, md: 2 }}
            className="df"
          >
            <Grid item md={1} className="image df fd-c ai-fs jc-c">
              <img src={scientist} alt="scientist" />
            </Grid>
            <Grid item md={1} className="text df fd-c ai-fs jc-c">
              <Typography component="h2" variant="h2" color="text.primary">
                {t("About_page.Treatments.title")}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {t("About_page.Treatments.p")}
              </Typography>
            </Grid>
          </Grid>
        </section>
        <section className="news">
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            columns={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item md={1} className="text df fd-c ai-fs jc-c">
              <Typography component="h2" variant="h2" color="text.primary">
                {t("About_page.Newsletters.title")}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {t("About_page.Newsletters.p")}
              </Typography>
            </Grid>
            <Grid item md={1} className="image df fd-c ai-fs jc-c">
              <img src={copd} alt="Lungs" />
            </Grid>
          </Grid>
        </section>
        <div className="attribution df fd-c">
          <Typography component="p" variant="subtitle1" color="text.primary">
            Project created by: Adem Deghar, Abdelghafour Echikr, Zakaria Dacha.
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            color="text.primary"
            className="df jc-c"
          >
            Coded with <Favorite color="error" /> by Abdelghafour Echikr.
          </Typography>
        </div>
      </Box>
    </section>
  );
};

export default AboutPage;
