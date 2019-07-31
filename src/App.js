import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './compnents/Navbar';
import MovieList from './compnents/MovieList';
import ThemeToggle from './compnents/ThemeToggle';
import Auth from './compnents/Auth';
import Home from './compnents/Home';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import MovieContextProvider from './context/MovieContext';

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <MovieContextProvider>
          <Router>
            <div className="App">
              <Auth />
              <ThemeToggle />
              <Navbar />

              <Route path="/" exact component={Home} />
              <Route path="/movies" component={MovieList} />
            </div>
          </Router>
        </MovieContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
