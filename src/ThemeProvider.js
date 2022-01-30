import {
  darktext,
  lighttext,
  backlight,
  backdark,
} from "./styles/theme/colors";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(theme === true ? false : true);
  };

  const color = theme === true ? `${darktext}` : `${lighttext}`;
  const backgroundColor = theme === true ? `${backlight}` : `${backdark}`;

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
