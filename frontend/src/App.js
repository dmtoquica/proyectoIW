import React, { useState } from 'react';
import Login from './components/Login';
import Rooms from './components/Rooms';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Rooms /> // Muestra Rooms solo si está logueado
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} /> // Muestra Login si no está logueado
      )}
    </div>
  );
}

export default App;
