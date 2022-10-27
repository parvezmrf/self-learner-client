import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';




const LoginEmailPassword = () => {
    const [errormsg, setErrormsg] = useState('');
    const { signIn, loginProvider, gitLoginProvider } = useContext(AuthContex);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleGoogleSignIn = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        gitLoginProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))

    }







    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        setErrormsg('')

        const form = event.target;


        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setErrormsg(error.message)
            })



    }



    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleLogin}>
                <h4>Please Login</h4>
                <Row className="mb-3">
                    <Form.Group className='d-flex' as={Col} md="8" controlId="validationCustom01">
                        <Form.Label as={Col} md="3">Enter Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Your email"
                            defaultValue=""
                            name='email'
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='d-flex' as={Col} md="8" controlId="validationCustom02">
                        <Form.Label as={Col} md="3">Enter Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="password"
                            defaultValue=""
                            name='password'
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
                <p className='text-danger' >{errormsg}</p>
                <p>No account? <Link to='/register' > Register here </Link> </p>

            </Form>



            <div className='text-center mt-5' >
                <Link> <Button onClick={handleGoogleSignIn} variant="outline-success">Login With Google <FcGoogle></FcGoogle> </Button></Link>
            </div>

            <div className='text-center mt-3' >
                <Link  > <Button onClick={handleGithubSignIn} variant="outline-success">Login With Github <VscGithubInverted></VscGithubInverted></Button></Link>
            </div>


        </>
    );
};

export default LoginEmailPassword;