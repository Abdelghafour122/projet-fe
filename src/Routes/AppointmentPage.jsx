import { Typography, Stepper, Step, StepLabel } from "@mui/material";
import React from "react";

const AppointmentPage = () => {
  const steps = [
    "Enter your information",
    "Choose Date and Time",
    "Choose a Doctor",
  ];

  return (
    <section className="appointment">
      <section className="container">
        <Typography component="h1" variant="h1" color="text.primary">
          Take an appointment
        </Typography>
      </section>
    </section>
  );
};

export default AppointmentPage;
