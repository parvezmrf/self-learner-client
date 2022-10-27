import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="light" />
    }

    if (!user) {
        return <Navigate to='/loginemailpssword' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;