import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { MovieContext } from '../context/MovieContext';
import { AuthContext } from '../context/AuthContext';
import MovieForm from './MovieForm';

const MovieList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { movies, removeMovie } = useContext(MovieContext);
  const { isAuthenticated } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="movie-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      {' '}
      {isAuthenticated ? (
        <div>
          {' '}
          <ul>
            {movies.map(movie => {
              return (
                <li
                  className="movie"
                  key={movie.id}
                  style={{ background: theme.ui }}
                  onClick={() => removeMovie(movie.id)}
                >
                  {movie.title}
                </li>
              );
            })}
          </ul>
          <MovieForm />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default MovieList;
