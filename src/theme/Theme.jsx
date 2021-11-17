import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgSite: "#d7d4ff",
    bgCard: "#6c63ff",

    white: "#fff",
    white300: "#f9f9f9",

    title: "#2b2b2b",
    text: "#555555",
  },
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
