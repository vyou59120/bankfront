import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Body from './Component/Body/Body';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar'
import { LoginPage } from './LoginPage/LoginPage'
import { ListeTransaction } from './ListeTransaction/ListeTransaction'
import { Histogramme } from './_Components/Histogramme/Histogramme'
import  EnhancedTable  from './Component/TableTransactions/TableTransactions'

function App() {
  return (
    
        <div className="App">
          <ResponsiveAppBar />
          {/* <Header/>
        <NavBar/> */}
        
  
            <div  className="">
                <div  className="">
                    <Routes>
                     
                      <Route exact path="/login" element={<LoginPage />}/>
                      
                      
                      
                      
                    </Routes>
                    <Body/>
                    <NavBar/>
                    
                </div>
            </div>
        </div>
      
  );
}

export default App;
