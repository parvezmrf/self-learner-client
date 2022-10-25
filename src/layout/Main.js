import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-1' >
                <Row>
                    <Col lg='3' >
                        <h2 className='bg-light' >Side Bar</h2>
                    </Col>
                    <Col lg='9' className='bg-light' >
                        <Outlet></Outlet>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;