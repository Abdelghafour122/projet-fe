import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const ContactusPage = () => {
  return (
    <section className="contact">
      <section className="container">
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 5 }}
          columns={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item md={1} className="image df fd-c ai-fs jc-c">
            <img src="" alt="" />
          </Grid>
          <Grid item md={1} className="info df fd-c ai-fs jc-c">
            <TextField
              id="outlined-basic"
              label="Full Name"
              dir="ltr"
              variant="outlined"
              type="text"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="email"
              dir="ltr"
              variant="outlined"
              fullWidth
              type="email"
            />
            <TextField
              id="outlined-basic"
              label="Content"
              dir="ltr"
              variant="outlined"
              type="text"
              fullWidth
              multiline
              rows={4}
            />
            <Button variant="contained" fullWidth size="large">
              Send
            </Button>
          </Grid>
        </Grid>
      </section>
    </section>
  );
};

export default ContactusPage;
