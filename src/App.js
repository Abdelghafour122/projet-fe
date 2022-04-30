import React, { useState, useEffect } from "react";
import "./Dist/App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Routes/HomePage";
import { useMediaQuery, ThemeProvider, Box } from "@mui/material";
import lightTheme from "./lightThemeStyle";
import darkTheme from "./darkThemeStyle";
import Footer from "./Components/Footer";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [choice, setChoice] = useState("System");

  useEffect(() => {
    document.body.style.backgroundColor = `${
      choice === "System" || choice === "Dark"
        ? "hsl(210, 100%, 12%)"
        : "hsl(210, 33%, 96%)"
    }`;
  }, [choice]);

  return (
    <ThemeProvider
      theme={
        choice === "System"
          ? prefersDarkMode
            ? darkTheme
            : lightTheme
          : choice === "Dark"
          ? darkTheme
          : lightTheme
      }
    >
      <Box component="main" bgcolor="custom.secondBgColor" className="App">
        <Navbar onSetChoice={setChoice} onChoice={choice} />
        <HomePage />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
