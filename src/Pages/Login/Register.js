import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';




const Register = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        const name = form.name.value
        const photourl = form.photourl.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photourl, email, password)



    }



    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h4>Please Register</h4>
            <Row className="mb-3">
                <Form.Group className='d-flex' as={Col} md="8" >
                    <Form.Label as={Col} md="4">Enter Your Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="name"
                        defaultValue=""
                        name="name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='d-flex' as={Col} md="8" >
                    <Form.Label as={Col} md="4">PhotoURL</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="paste your links here"
                        defaultValue=""
                        name="photourl"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='d-flex' as={Col} md="8" >
                    <Form.Label as={Col} md="4">Enter Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Your email"
                        defaultValue=""
                        name="email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='d-flex' as={Col} md="8" >
                    <Form.Label as={Col} md="4">Enter Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        defaultValue=""
                        name="password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='d-flex' as={Col} md="8" >
                    <Form.Label as={Col} md="4">Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Confirm Password"
                        defaultValue=""
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
            <p>Already have a account? <Link to='/login' > Login here </Link> </p>
        </Form>
    );
};

export default Register;