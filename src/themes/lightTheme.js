import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#8095b3",
      main: "#4d6280",
      dark: "#1a212b",
    },
    secondary: {
      main: "#ffc400",
    },
    background: {
      paper: "#f2f2f2",
      default: "#e6e6e6",
    },
    text: {
      primary: "#0d0d0d",
      secondary: "#4d4d4d",
      disabled: "#333333",
    },
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontSize: "1.5rem",
    },
    subtitle2: {
      fontSize: "0.9rem",
    },
    caption: {
      fontSize: "0.8rem",
    },
  },
});

export default theme;
