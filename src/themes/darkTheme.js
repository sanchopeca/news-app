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
      paper: "#4c4e59",
      default: "#111924",
    },
    text: {
      primary: "#c2c4cc",
      secondary: "#96979c",
      disabled: "#99ddff",
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
