import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../Assets/Pictures/logo.png";
import { Facebook, Pinterest, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" bgcolor="custom.firstBgColor">
      <section className="container df ai-c jc-sb">
        <div className="creds">
          <img src={logo} alt="Medical logo" />
          <Typography component="p" variant="subtitle2" color="text.primary">
            CLINICAL &diams; Copywright 2022 &copy;
          </Typography>
        </div>
        <div className="links">
          <Link underline="always" component="a" variant="a" href="/about">
            About
          </Link>
          <Link underline="always" component="a" variant="a" href="#">
            Join Us
          </Link>
          <Link underline="always" component="a" variant="a" href="#">
            Newsletters
          </Link>
          <Link underline="always" component="a" variant="a" href="#">
            Contact Us
          </Link>
        </div>
        <div className="socials">
          <Facebook fontSize="medium" color="primary" />
          <Pinterest fontSize="medium" color="primary" />
          <Instagram fontSize="medium" color="primary" />
          <Twitter fontSize="medium" color="primary" />
        </div>
      </section>
    </Box>
  );
};

export default Footer;
