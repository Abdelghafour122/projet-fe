import { Typography } from "@mui/material";
import React from "react";
import GoHomeButton from "../Components/Buttons/GoHomeButton";

const ErrorPage = () => {
  return (
    <section className="error">
      <section className="container df fd-c ai-c jc-c">
        <Typography component="h1" variant="h1" color="text.primary">
          An Error Has Occured
        </Typography>
        <Typography component="p" variant="p" color="text.secondary">
          Something went wrong, Looks like this page doesn't exist.
        </Typography>
        <GoHomeButton />
      </section>
    </section>
  );
};

export default ErrorPage;
