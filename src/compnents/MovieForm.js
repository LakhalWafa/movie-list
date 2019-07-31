import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MovieContext } from '../context/MovieContext';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { addMovie } = useContext(MovieContext);
  const theme = isLightTheme ? light : dark;

  const handleSubmit = e => {
    e.preventDefault();
    addMovie(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add Movie </label>
      <input
        type="text"
        placeholder="Movie Title"
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
