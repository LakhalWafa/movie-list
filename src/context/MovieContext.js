import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [movies, setMovies] = useState([
    { title: 'The Lion King', id: 1 },
    { title: 'Aladdin', id: 2 },
    { title: 'The Hustle', id: 3 },
    { title: 'The Avengers: EndGame', id: 4 },
    { title: 'Dark Phoenix', id: 5 },
    { title: 'Spider-man: Far From Home', id: 7 },
    { title: 'John Wick: Chapter 3 - Parabellum', id: 8 }
  ]);
  const addMovie = title => {
    setMovies([...movies, { title, id: uuid() }]);
  };
  const removeMovie = id => {
    setMovies(movies.filter(book => book.id !== id));
  };
  return (
    <MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
