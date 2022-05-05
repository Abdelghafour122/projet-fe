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
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

    backend: {
      loadPath: "./Assets/Locales/{{lng}}/translation.json",
    },
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
      fr: {
        translation: {
          "Welcome to React": "pain au fromage",
        },
      },
      ar: {
        translation: {
          "Welcome to React": "تهصثتمهصثتبمهصتثهبصتهثتهمت",
        },
      },
    },
    react: { useSuspense: false },
  });

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [choice, setChoice] = useState("System");

  const { t } = useTranslation();

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
        <h1>{t("Welcome to React")} </h1>
        <h1>{t("welcome")} </h1>
        <Routes>
          <Route path="/projet-fe" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join%20us" element={<JoinusPage />} />
          <Route path="/contact%20us" element={<ContactusPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/symptoms" element={<SymptomsPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
