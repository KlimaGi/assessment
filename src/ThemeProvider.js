import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(theme === true ? false : true);
  };

  const color = theme === true ? "#5c7377" : "#79999e";
  const backgroundColor = theme === true ? "#edecee" : "#3b3f47";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
