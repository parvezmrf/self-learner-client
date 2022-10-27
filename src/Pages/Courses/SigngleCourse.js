import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const SigngleCourse = ({ course }) => {

    const { id, names, details, duration, author, rating, date, price, img } = course;

    return (
        < div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {names} </Card.Title>
                    <Card.Text>
                        {details.slice(0, 75) + '...'}
                    </Card.Text>
                    <div>
                        <span>Duration: <strong>{duration} Minutes </strong> </span> <br />
                        <span>Auther: <strong>{author} </strong> </span> <br />
                        <span>Published: <strong>{date} </strong> </span>
                    </div>
                    <div className='d-flex justify-content-between ' >
                        <p>Rating: <strong>{rating}</strong> </p>
                        <p><strong>${price}</strong> </p>
                    </div>
                    <Link to={`/course/${id}`} >  <Button variant="primary"> See Details</Button> </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SigngleCourse;