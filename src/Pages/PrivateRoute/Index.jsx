
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({tokenInLocaleStorage}) => {

    const tokenFromRedux = useSelector(data => data.connection.token)
    const token = tokenInLocaleStorage ? tokenInLocaleStorage : tokenFromRedux

    if(!token) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PrivateRoute;