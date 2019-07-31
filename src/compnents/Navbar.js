import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Movies List</h1>
      <ul>
        <li>
          <Link to="/" style={{ color: theme.syntax }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" style={{ color: theme.syntax }}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
