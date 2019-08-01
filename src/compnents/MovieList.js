import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { MovieContext } from '../context/MovieContext';
import { AuthContext } from '../context/AuthContext';
import MovieForm from './MovieForm';

const MovieList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { movies, dispatch } = useContext(MovieContext);
  const { isAuthenticated } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return movies.length ? (
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
                  onClick={() =>
                    dispatch({ type: 'REMOVE_MOVIE', id: movie.id })
                  }
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
  ) : (
    <div
      className="empty"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      No movies to watch! Hello free time...
    </div>
  );
};

export default MovieList;
