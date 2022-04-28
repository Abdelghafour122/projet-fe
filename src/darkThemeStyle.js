import { createTheme } from "@mui/material/styles";

// make the dark theme inside the custom
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    custom: {
      headingColor: "hsl(210, 69%, 41%)",
      mainBgColor: "hsl(211, 61%, 10%)",
    },
  },
  typography: {
    fontFamily: " Poppins",
    // dir ga3 les type t3 text li ts7a9hom Hna
    p: {
      fontFamily: "Poppins",
      fontSize: "18px",
      "&:hover": {
        color: "blue",
      },
    },
    h1: {
      fontFamily: "Libre Bodoni",
      fontSize: "50px",
    },
  },
});

export default darkTheme;
