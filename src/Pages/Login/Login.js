import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const navigate = useNavigate();


    const { loginProvider } = useContext(AuthContex);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className='text-center mt-5' >
                <Link> <Button onClick={handleGoogleSignIn} variant="outline-success">Login With Google <FcGoogle></FcGoogle> </Button></Link>
            </div>

            <div className='text-center mt-3' >
                <Link to='/loginemailpssword'   > <Button variant="primary">Login With Facebook</Button></Link>
            </div>
            <div className='text-center mt-3' >
                <Link to='/loginemailpssword' > <Button variant="dark"> <RiLockPasswordLine></RiLockPasswordLine> With Email and Password</Button></Link>
            </div>
        </>
    );
};

export default Login;