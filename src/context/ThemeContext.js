import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({
    syntax: '#990000',
    ui: '#ff8080',
    bg: '#ffe6e6'
  });
  const [dark, setDark] = useState({
    syntax: '#ffe6e6',
    ui: '#990000',
    bg: '#cc0000'
  });
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
