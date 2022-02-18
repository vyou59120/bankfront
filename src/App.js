import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Body from './Component/Body/Body';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar'
import { LoginPage } from './LoginPage/LoginPage'
import { Histogramme } from './_Components/Histogramme/Histogramme'
import  EnhancedTable  from './Component/TableTransactions/TableTransactions'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContext } from './Context/Context'
import authentication from './Reducer/authentication.reducer'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'

const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
};

function App() {

  const [state, dispatch] = React.useReducer(authentication, initialState);

  return (
      <AuthContext.Provider value={{state,dispatch}}>
        <div className="App">
          <ResponsiveAppBar />
          {/* <Header/>
        <NavBar/> */}
       
            <div  className="">
                <div  className="">
                    <Routes>
                     
                      <Route exact path="/login" element={<LoginPage />}/>
                      <Route exact path="/" element={<LoginPage />} />
                      <Route
                              path="/listeTransaction"
                              element={
                                  <PrivateRoute>
                                      <EnhancedTable />
                                  </PrivateRoute>
                              }
                       />
                    </Routes>
                    {/*<Body/>*/}
                    {/*<NavBar/>*/}
                </div>
            </div>
        </div>
      </AuthContext.Provider>
  );
}

export default App;
