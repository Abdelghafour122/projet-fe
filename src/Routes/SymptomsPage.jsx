import { ContentPasteSearchTwoTone, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SymptomsPage = () => {
  const navigate = useNavigate();
  return (
    <section className="appointment">
      <section className="container">
        <Typography component="h1" variant="h1" color="text.primary">
          Explore the symptoms
        </Typography>
        <Typography component="p" variant="p" color="text.secondary">
          We have made available the symptoms of the most common and widley
          spread illnesses to spread more awareness, and help building a
          healthier environment
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="h4" variant="h4">
              Item one
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p" variant="p">
              Item one description in here
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography component="h4" variant="h4">
              Item two
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p" variant="p">
              Item two description in here
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ContentPasteSearchTwoTone />}
          onClick={() => navigate("/appointment")}
        >
          Book an appointment
        </Button>
      </section>
    </section>
  );
};

export default SymptomsPage;
