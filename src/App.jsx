import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import './App.css';
import Register from './components/Register'
import {HelmetProvider} from 'react-helmet-async'



function App() {
  return (
    <div className="App bg-white">
      <HelmetProvider>
      <Router basename="/Prosper-Tech">
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/v1/auth/login" element={<Login/>} />
            <Route exact path="/v1/auth/register" element={<Register/>} />
          </Routes>
      </Router>
    </HelmetProvider>
    </div>
  );
}

export default App;