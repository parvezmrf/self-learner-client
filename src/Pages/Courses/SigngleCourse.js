import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const SigngleCourse = ({ course }) => {

    const { id, names, details } = course;

    return (
        < div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title> {names} </Card.Title>
                    <Card.Text>
                        {details.slice(0, 75) + '...'}
                    </Card.Text>
                    <p> <span>pp</span> </p>
                    <Link to={`/course/${id}`} >  <Button variant="primary"> Details</Button> </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SigngleCourse;