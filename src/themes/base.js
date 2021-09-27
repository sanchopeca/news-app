import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

const themes = {
  darkTheme,
  lightTheme,
};

export default function getTheme(theme) {
  return themes[theme];
}
