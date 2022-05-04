import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const USER_REGEX = /^[A-z]{3,50}$/;
const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const ContactusPage = () => {
  const [validFullName, setValidFullName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validContent, setValidContent] = useState(false);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setValidFullName(USER_REGEX.test(fullName));
  }, [fullName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidContent(
      content.length <= 20 || content.length > 1200 ? false : true
    );
  }, [content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setContent("");
    console.log({ fullName, email, content });
  };

  return (
    <section className="contact">
      <section className="container">
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 5 }}
          columns={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item md={1} className="text df fd-c ai-fs jc-c">
            <Typography component="h1" variant="h1" color="text.primary">
              Contact Us
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              Contact us, your feedback always helps us grow and improve our
              services.{" "}
            </Typography>
          </Grid>
          <Grid item md={1} className="info df fd-c ai-fs jc-c">
            <form action="" className="df fd-c" onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                dir="ltr"
                variant="outlined"
                type="text"
                fullWidth
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                value={fullName}
                error={fullName !== "" && !validFullName}
                color={validFullName ? "success" : "primary"}
                helperText={fullName && !validFullName && "Invalid Name"}
              />
              <TextField
                id="outlined-basic"
                label="email"
                dir="ltr"
                variant="outlined"
                fullWidth
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                error={email !== "" && !validEmail}
                color={validEmail ? "success" : "primary"}
                helperText={email && !validEmail && "This is not an Email"}
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
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
                error={content !== "" && !validContent}
                color={validContent ? "success" : "primary"}
                helperText={
                  content && content.length <= 20
                    ? "Too short content"
                    : content.length > 1200 && "Too long content"
                }
              />
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleSubmit}
                disabled={!validFullName || !validEmail || !validContent}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </section>
    </section>
  );
};

export default ContactusPage;
