import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Body from './Component/Body/Body';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar'
import { LoginPage } from './LoginPage/LoginPage'
import { DashboardClient } from './DashboardClient/DashboardClient'
import  EnhancedTable  from './Component/TableTransactions/TableTransactions'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContext } from './Context/Context'
import authentication from './Reducer/authentication.reducer'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'

const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    message: ""
};

function App() {

  const [state, dispatch] = React.useReducer(authentication, initialState);

  return (
      <AuthContext.Provider value={{state,dispatch}}>
        <div className="App">
              <ResponsiveAppBar />
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
                      <Route
                              path="/DashboardClient"
                              element={
                                  <PrivateRoute>
                                      <DashboardClient />
                                  </PrivateRoute>
                              }
                       />
                    </Routes>
        </div>
      </AuthContext.Provider>
  );
}

export default App;
