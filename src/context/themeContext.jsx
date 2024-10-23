import React, { useState, useContext } from "react";

export const themes = {
  light: {
    foreground: "#333333",
    background: "#BAE2FF",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
// named export for this context (to be used via useContext elsewhere)
export const MyThemeContext = React.createContext({ theme: themes.light });
// provider wrapper. uses its own state to track which theme is in use
// use it in App.jsx like <MyThemeProvider>...</MyThemeProvider>
export default function MyThemeProvider(props) {
  const [theme, setTheme] = React.useState(themes.light);
  // helper boolean to tell if we’re currently in dark mode
  const darkMode = theme.background === themes.dark.background;
  const switchTheme = () => {
    darkMode ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <MyThemeContext.Provider value={{ theme, setTheme, darkMode, switchTheme }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

// export const useThemeContext = () => {
//   return useContext(MyThemeContext);
// };
