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

const PrivateRoute = ({ children }) => {
    /*const authed = isauth() */
    const { state } = React.useContext(AuthContext);
    console.log(state)
    console.log(state['isLoggedIn'])
    console.log(state['isLoggedIn'] != undefined)

    const authed = state['isLoggedIn'] != false


    return authed ? children : <Navigate to="/login" />;
}

export default PrivateRoute;