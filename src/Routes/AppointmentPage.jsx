import { Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SuccessSnackbar from "../Components/Snackbars/SuccessSnackbar";

const USER_REGEX = /^[A-z]{3,23}$/;
const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const AppointmentPage = () => {
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validAge, setValidAge] = useState(false);
  const [validDate, setValidDate] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");

  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [ageFocus, setAgeFocus] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhoneNumber(phoneNumber !== "" && phoneNumber.length <= 9);
  }, [phoneNumber]);

  useEffect(() => {
    setValidAge(age !== "" && age >= 5 && age <= 120);
  }, [age]);

  useEffect(() => {
    setValidDate();
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, validFirstName });
    console.log({ lastName, validLastName });
    console.log({ email, validEmail });
    console.log({ phoneNumber, validPhoneNumber });
    console.log({ age, validAge });
    // console.log({ date, validDate });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAge("");
    handleClick();
  };

  return (
    <section className="appointment">
      <section className="container df fd-c ai-c">
        <Typography component="h1" variant="h1" color="text.primary">
          Take an appointment
        </Typography>
        <form action="" className="df fd-c ai-c">
          <TextField
            id="outlined-basic"
            label="First Name"
            dir="ltr"
            variant="outlined"
            type="text"
            value={firstName}
            error={firstName !== "" && !validFirstName}
            color={validFirstName ? "success" : "primary"}
            helperText={firstName && !validFirstName && "Invalid First Name"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            dir="ltr"
            variant="outlined"
            type="text"
            value={lastName}
            error={lastName !== "" && !validLastName}
            color={validLastName ? "success" : "primary"}
            helperText={lastName && !validLastName && "Invalid Last Name"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Email"
            dir="ltr"
            variant="outlined"
            type="email"
            value={email}
            error={email !== "" && !validEmail}
            color={validEmail ? "success" : "primary"}
            helperText={email && !validEmail && "This is not an Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            dir="ltr"
            variant="outlined"
            type="number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            onFocus={() => setPhoneNumberFocus(true)}
            onBlur={() => setPhoneNumberFocus(false)}
            value={phoneNumber}
            error={phoneNumberFocus && !validPhoneNumber}
            color={validPhoneNumber ? "success" : "primary"}
            helperText={
              phoneNumberFocus && !validPhoneNumber && "Invalid phone number"
            }
            required
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Age"
            dir="ltr"
            variant="outlined"
            type="number"
            InputProps={{
              inputProps: { min: 5, max: 120 },
            }}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
            onFocus={() => setAgeFocus(true)}
            onBlur={() => setAgeFocus(false)}
            error={ageFocus && !validAge}
            color={validAge ? "success" : "primary"}
            helperText={ageFocus && !validAge && "Invalid age"}
            required
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Date and Time"
            dir="ltr"
            variant="outlined"
            type="datetime-local"
            focused
            onChange={(e) => {
              setDate(e.target.value);
              console.log(e.target.value);
            }}
            InputProps={{
              inputProps: { min: "2022-05-07T09:00", max: "2022-12-31T23:59" },
            }}
            value={date}
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={
              !validFirstName ||
              !validLastName ||
              !validEmail ||
              !validPhoneNumber ||
              !validAge
              // !validDate
            }
            fullWidth
          >
            Book now
          </Button>
        </form>
      </section>
      <SuccessSnackbar
        open={open}
        handleClose={handleClose}
        text={"Appointment Booked!"}
      />
    </section>
  );
};

export default AppointmentPage;
