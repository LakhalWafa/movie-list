import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark, toggleTheme } = context;
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
              Toggle the theme
            </button>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default ThemeToggle;
