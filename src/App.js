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
import { DashboardClient } from './DashboardClient/DashboardClient'
import { DashboardDirecteur } from './DashboardDirecteur/DashboardDirecteur'
import { DashboardCommercial } from './DashboardCommercial/DashboardCommercial'
import { ReleveCompte } from './ReleveCompte/ReleveCompte'
import EnhancedTable from './Component/TableTransactions/TableTransactions'
import { AuthContext } from './Context/Context'
import authentication from './Reducer/authentication.reducer'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'

let user = JSON.parse(localStorage.getItem('user'));
let token = JSON.parse(localStorage.getItem('token'));

let initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    message: ""
};

if (user != null) {
     initialState = {
        isLoggedIn: true,
        user: user,
        token: token,
        message: ""
    };
}

function App() {
    
    const [state, dispatch] = React.useReducer(authentication, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <ResponsiveAppBar />
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
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
                    <Route
                        path="/ReleveCompte/:id"
                        element={
                            <PrivateRoute>
                                <ReleveCompte />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/DashboardCommercial"
                        element={
                            <PrivateRoute>
                                <DashboardCommercial />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/DashboardDirecteur"
                        element={
                            <PrivateRoute>
                                <DashboardDirecteur />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
