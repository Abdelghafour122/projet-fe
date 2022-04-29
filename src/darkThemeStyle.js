import { createTheme } from "@mui/material/styles";

// make the dark theme inside the custom
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    custom: {
      firstBgColor: "hsl(211, 61%, 10%)",
      secondBgColor: "hsl(210, 100%, 12%)",
      navbarBgColor: "hsla(211, 61%, 10%, 0.849)",
    },
  },
  typography: {
    fontFamily: " Poppins",
    // dir ga3 les type t3 text li ts7a9hom Hna
    p: {
      fontFamily: "Poppins",
      fontSize: "18px",
    },
    h1: {
      fontFamily: "Libre Bodoni",
      fontSize: "50px",
    },
  },
});

export default darkTheme;
