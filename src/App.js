import React, { useState } from "react";
import "./Dist/App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Routes/HomePage";
import { useMediaQuery, ThemeProvider } from "@mui/material";
import lightTheme from "./lightThemeStyle";
import darkTheme from "./darkThemeStyle";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [choice, setChoice] = useState("System");

  return (
    <main className="App">
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
        <Navbar onSetChoice={setChoice} onChoice={choice} />
        <HomePage />
      </ThemeProvider>
    </main>
  );
}

export default App;
