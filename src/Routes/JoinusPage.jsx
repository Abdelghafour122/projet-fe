import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const USER_REGEX = /^[A-z]{3,23}$/;
const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const JoinusPage = () => {
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, validFirstName });
    console.log({ lastName, validLastName });
    console.log({ email, validEmail });
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <section className="joinus">
      <section className="container">
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
            <form
              action=""
              className="df fd-c ai-c jc-c"
              onSubmit={handleSubmit}
            >
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                type="text"
                fullWidth
                value={firstName}
                error={firstName !== "" && !validFirstName}
                color={validFirstName ? "success" : "primary"}
                helperText={
                  firstName && !validFirstName && "Invalid First Name"
                }
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                type="text"
                fullWidth
                value={lastName}
                error={lastName !== "" && !validLastName}
                color={validLastName ? "success" : "primary"}
                helperText={lastName && !validLastName && "Invalid Last Name"}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={email}
                error={email !== "" && !validEmail}
                color={validEmail ? "success" : "primary"}
                helperText={email && !validEmail && "This is not an Email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!validEmail || !validFirstName || !validLastName}
                fullWidth
                size="large"
              >
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
