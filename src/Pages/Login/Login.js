import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
            <div className='text-center mt-5' >
                <Link to='/loginemailpssword'> <Button variant="dark">Login With Email and Password</Button></Link>
            </div>
            <div className='text-center mt-3 ' >
                <Link to='/loginemailpssword'> <Button variant="outline-success">Login With Google</Button></Link>
            </div>
            <div className='text-center mt-3 ' >
                <Link to='/loginemailpssword'> <Button variant="primary">Login With Facebook</Button></Link>
            </div>
        </>
    );
};

export default Login;