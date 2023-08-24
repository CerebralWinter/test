import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import './App.css';
import Biography from './components/Biography';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Login from './components/Login';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  // eslint-disable-next-line
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUserData(jwt_decode(token));
    }
  }, []);

  const handleLogin = (token) => {
    const decoded = jwt_decode(token);
    setUserData(decoded);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Biography />
          <Projects />
          <Skills />
          <Contacts />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;