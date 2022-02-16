import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './_Components/NavBar';
import Body from './_Components/Body';
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <Body />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
