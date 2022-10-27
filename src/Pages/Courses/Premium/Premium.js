import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Premium = () => {
    const course = useLoaderData()
    const { names, author, details, duration, rating, date, price, img } = course;

    return (
        < div>
            <Card className='w-50' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {names} </Card.Title>
                    <Card.Text>
                        {details}
                        {details}
                        {details}
                        {details}
                        {details}
                    </Card.Text>
                    <p> Author: <strong>{author}</strong> </p>
                    <p> Duration: <strong>{duration} minutes</strong> </p>
                    <p> Price: <strong>${price}</strong> </p>
                    <p> Published Date: <strong>{date}</strong> </p>
                    <p> Rating: <strong>{rating}</strong> </p>
                    <Link to='/courses' >  <Button variant="primary">Back to courses</Button> </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Premium;