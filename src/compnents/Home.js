import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { movies } = useContext(MovieContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="movie-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <p>
        This is a movie list app created with React Hooks and Context. You add a
        list of movies that you want to watch and delete them afterwards.
      </p>
      <p>Currently you have {movies.length} movies to watch. </p>
      <button
        className="button"
        style={{
          color: theme.syntax,
          backgroundColor: theme.ui
        }}
      >
        {' '}
        <a
          href="http://www2.putlockers.tf/"
          style={{ color: theme.syntax }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Start Watching
        </a>
      </button>
    </div>
  );
};

export default Home;
