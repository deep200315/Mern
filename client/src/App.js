import './App.css';

import React from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUpForm';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
const App = () => {
  return (
    <Router>
     <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
      </Router>

  );
};

export default App;
