import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { useContext } from 'react';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const { loginProvider } = useContext(AuthContex);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className='text-center mt-5 ' >
                <Link> <Button onClick={handleGoogleSignIn} variant="outline-success">Login With Google</Button></Link>
            </div>
            <div className='text-center mt-3' >
                <Link to='/loginemailpssword'> <Button variant="dark"> <RiLockPasswordLine></RiLockPasswordLine> Email and Password</Button></Link>
            </div>

            <div className='text-center mt-3 ' >
                <Link to='/loginemailpssword'> <Button variant="primary">Login With Facebook</Button></Link>
            </div>
        </>
    );
};

export default Login;