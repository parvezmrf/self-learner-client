import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';




const LoginEmailPassword = () => {

    const [validated, setValidated] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;


        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)





    }



    return (
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
                        placeholder="First name"
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
            <p>No account? <Link to='/register' > Register here </Link> </p>

        </Form>
    );
};

export default LoginEmailPassword;