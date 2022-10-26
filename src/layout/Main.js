import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import SideNav from '../Pages/Shared/SideNav/SideNav';
import './Main.css'

const Main = () => {
    return (
        <div className='container-home' >
            <Header></Header>
            <div className='mt-1' >
                <Row>
                    <Col lg='3' >
                        <h2 className='bg-light' > <SideNav></SideNav> </h2>
                    </Col>
                    <Col lg='9' className='bg-light' >
                        <Outlet></Outlet>

                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;