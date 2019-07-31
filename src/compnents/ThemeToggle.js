import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <button
      className="button"
      onClick={toggleTheme}
      style={{
        color: theme.syntax,
        backgroundColor: theme.bg
      }}
    >
      {theme === light ? 'Light' : 'Dark'}
    </button>
  );
};
export default ThemeToggle;
