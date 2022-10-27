import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContex);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/loginemailpssword' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;