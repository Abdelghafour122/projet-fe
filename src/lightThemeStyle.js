import { createTheme } from "@mui/material/styles";

// make the light theme inside the custom
const lightTheme = createTheme({
  palette: {
    mode: "light",
    custom: {
      headingColor: "hsl(196, 70%, 71%)",
      mainBgColor: "hsl(0, 0%, 100%)",
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

export default lightTheme;
