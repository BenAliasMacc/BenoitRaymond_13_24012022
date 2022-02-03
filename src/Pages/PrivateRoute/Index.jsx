
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {

    const token = useSelector(state => state.connection.token) 

    if(token === '') {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PrivateRoute;