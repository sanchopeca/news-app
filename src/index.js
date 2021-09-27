import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <ThemeContextProvider>
    <CssBaseline />
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
