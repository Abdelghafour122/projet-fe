import { createTheme } from "@mui/material/styles";

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
