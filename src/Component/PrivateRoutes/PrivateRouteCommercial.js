import React, { useEffect, useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context'

//const PrivateRoute = ({ element: Component, user, ...rest }) => {
//    return (
//        <Route {...rest} render={
//            props => {
//                if (user) {
//                    return <Component {...rest} {...props} />
//                } else {
//                    return <Navigate to="/login"/>
//                }
//            }
//        } />
//    )
//}

const PrivateRouteCommercial = ({ children }) => {

    let user = JSON.parse(localStorage.getItem('user'));
    let token = JSON.parse(localStorage.getItem('token'));

    //const { state } = React.useContext(AuthContext);

    /*const authed = state['isLoggedIn'] != false*/

    const authed = user != undefined

    return (authed && user['role'] == "STAFF") ? children : <Navigate to="/login" />;
}

export default PrivateRouteCommercial;