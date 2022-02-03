
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {

    const auth = useSelector(state => state.connexion.token); 

    return auth.length !== '' ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;