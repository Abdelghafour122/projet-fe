import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./Dist/App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Routes/HomePage";
import AboutPage from "./Routes/AboutPage";

import { useMediaQuery, ThemeProvider, Box } from "@mui/material";
import lightTheme from "./lightThemeStyle";
import darkTheme from "./darkThemeStyle";
import Footer from "./Components/Footer";
import JoinusPage from "./Routes/JoinusPage";

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
        <Routes>
          <Route path="/projet-fe" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join%20us" element={<JoinusPage />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
