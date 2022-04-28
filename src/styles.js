import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: " Poppins",
    body1: {
      fontFamily: "Libre Bodoni",
      fontSize: "28px",
    },
    h1: {
      fontFamily: "Libre Bodoni",
      fontSize: "50px",
    },
  },
});

export default theme;
