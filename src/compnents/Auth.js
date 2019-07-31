import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <button
      className="button"
      onClick={toggleAuth}
      style={{
        color: theme.syntax,
        backgroundColor: theme.bg
      }}
    >
      {isAuthenticated ? 'Logged In' : 'Logged Out'}
    </button>
  );
};

export default Auth;
