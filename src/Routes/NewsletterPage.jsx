import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import newsletter from "../Assets/Pictures/newsletter.jpeg";

const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, validEmail });
    setEmail("");
  };
  return (
    <section className="newsletter">
      <section className="container">
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 5 }}
          columns={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item md={1} className="image df fd-c ai-fs jc-c">
            <img src={newsletter} alt="Newsletter" />
          </Grid>
          <Grid item md={1} className="info df fd-c ai-fs jc-c">
            <Typography component="h2" variant="h2" color="text.primary">
              Subscribe to our newsletter
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              Get our most-loved tips and the latest news that goes hand in hand
              with healthy living, three times a week in our Wellness Wire
              newsletter.
            </Typography>
            <form
              action=""
              className="df fd-c ai-c jc-c"
              onSubmit={handleSubmit}
            >
              <TextField
                id="outlined-basic"
                label="Email"
                dir="ltr"
                variant="outlined"
                fullWidth
                type="email"
                error={email !== "" && !validEmail}
                color={validEmail ? "success" : "primary"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                helperText={email && !validEmail && "This is not an Email"}
              />
              <Button
                variant="contained"
                fullWidth
                size="large"
                disabled={!validEmail}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </form>
          </Grid>
        </Grid>
      </section>
    </section>
  );
};

export default NewsletterPage;
