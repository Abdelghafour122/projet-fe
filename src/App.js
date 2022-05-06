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
import ContactusPage from "./Routes/ContactusPage";
import NewsletterPage from "./Routes/NewsletterPage";
import AppointmentPage from "./Routes/AppointmentPage";
import SymptomsPage from "./Routes/SymptomsPage";
import ErrorPage from "./Routes/ErrorPage";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./Assets/Locales/en/translation.json";
import frTranslation from "./Assets/Locales/fr/translation.json";
import arTranslation from "./Assets/Locales/ar/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["en", "fr", "ar"],
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: { translation: arTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    react: { useSuspense: false },
  });

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
          <Route path="/contact%20us" element={<ContactusPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/symptoms" element={<SymptomsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
