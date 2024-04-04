"use client";

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";

export function ThemeProvider({ children }) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
