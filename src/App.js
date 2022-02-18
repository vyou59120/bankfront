import logo from './logo.svg';
/*import './App.css';*/
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './_Components/NavBar';
import Body from './_Components/Body';
import Header from './_Components/Header';
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar'
import { LoginPage } from './LoginPage/LoginPage'
import { ListeTransaction } from './ListeTransaction/ListeTransaction'
import { Histogramme } from './_Components/Histogramme/Histogramme'
import  EnhancedTable  from './Component/TableTransactions/TableTransactions'

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
       
      {/*  <Header/>*/}
      {/*  <NavBar/>*/}
      {/*  <Body/>*/}
       
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*    </header>*/}
          <div className="App">
              <ResponsiveAppBar />


              <div className="">
                  <div className="">
                      <Routes>
                          <Route exact path="/login" element={<LoginPage />} />
                          <Route exact path='/listeTransaction' element={<EnhancedTable />} />
                          <Route exact path='/' element={<Histogramme />} />
                      </Routes>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default App;
