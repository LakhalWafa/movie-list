import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({
    syntax: '#333333',
    ui: '#a6a6a6',
    bg: '#d9d9d9'
  });
  const [dark, setDark] = useState({
    syntax: '#d9d9d9',
    ui: '#333333',
    bg: '#737373'
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
