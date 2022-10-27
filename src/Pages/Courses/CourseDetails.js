import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const CourseDetails = () => {
    const course = useLoaderData()
    const { id, names, author, details, duration, rating, date, price, img } = course;

    return (
        < div>


            <Button variant="info">Click to download as PDF</Button>
            <Card className='w-75' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {names} </Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <p> Author: <strong>{author}</strong> </p>
                    <p> Duration: <strong>{duration} minutes</strong> </p>
                    <p> Price: <strong>${price}</strong> </p>
                    <p> Published Date: <strong>{date}</strong> </p>
                    <p> Rating: <strong>{rating}</strong> </p>
                    <Link to={`/buy/${id}`} >  <Button variant="success"> Get the Premium</Button> </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;