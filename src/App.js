import React from 'react';
import Navbar from './compnents/Navbar';
import BookList from './compnents/BookList';
import ThemeToggle from './compnents/ThemeToggle';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
