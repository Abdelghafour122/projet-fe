import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const JoinusPage = () => {
  return (
    <section className="joinus df ai-c jc-c">
      <section className="container">
        {/* <Box component="section" className="container">
      </Box> */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 5 }}
          columns={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item md={1} className="info df fd-c ai-fs jc-c">
            <Typography component="h1" variant="h1" color="text.primary">
              Join Us!
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              Join us and become a member of our experienced team of doctors in
              CLINICAL.
            </Typography>
          </Grid>
          <Grid item md={1} className="form df fd-c ai-c jc-c">
            <form action="" className="df fd-c ai-c jc-c">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
              <Button variant="contained" fullWidth size="large">
                Join us
              </Button>
            </form>
          </Grid>
        </Grid>
      </section>
    </section>
  );
};

export default JoinusPage;
