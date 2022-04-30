import { createTheme } from "@mui/material/styles";

// make the light theme inside the custom
const lightTheme = createTheme({
  palette: {
    mode: "light",
    custom: {
      firstBgColor: "hsl(0, 0%, 100%)",
      secondBgColor: "hsl(210, 33%, 96%)",
      navbarBgColor: "hsla(0, 0%, 100%, 0.845)",
    },
  },
  typography: {
    fontFamily: " Poppins",
    p: {
      fontFamily: "Poppins",
      fontSize: "18px",
    },
    h1: {
      fontFamily: "Libre Bodoni",
      fontSize: "50px",
    },
    h4: {
      fontFamily: "Libre Bodoni",
    },
    h5: {
      fontFamily: "Libre Bodoni",
    },
    a: {
      fontFamily: "Poppins",
    },
  },
});

export default lightTheme;
