import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "../themes/base";

export const ThemeContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("darkTheme");

  const theme = getTheme(themeName);

  const toggleThemeHandler = () => {
    if (themeName === "darkTheme") {
      setThemeName("lightTheme");
    } else {
      setThemeName("darkTheme");
    }
  };

  const contextValue = {
    theme: theme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
