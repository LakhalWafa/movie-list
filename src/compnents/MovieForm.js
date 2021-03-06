import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MovieContext } from '../context/MovieContext';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { dispatch } = useContext(MovieContext);
  const theme = isLightTheme ? light : dark;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_MOVIE', title });
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Movie"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="button"
        style={{
          color: theme.syntax,
          backgroundColor: theme.ui
        }}
      >
        Add
      </button>
    </form>
  );
};

export default MovieForm;
