import { Link } from "react-router-dom";
import React from 'react';
import Logo from '../../../assets/logo.png'
import Button from 'react-bootstrap/Button';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { useContext } from "react";
import { AuthContex } from "../../../context/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';





const ProfileMenu = () => {

    const { user, logOut } = useContext(AuthContex);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <>


            <div className='d-flex justify-content-between mt-3 ' >
                <div className='d-flex ms-3 ' >
                    <img style={{ height: '40px' }} src={Logo} alt="" />
                    <h3 className="ms-3" >Self Learner</h3>
                </div>
                <div className='d-flex align-items-center' >
                    <span className="fs-4" > <BiSearchAlt></BiSearchAlt></span> <input className='text-center border-0 rounded-5 mt-2' type="text" placeholder='Search Your Course here' />
                </div>


                <div >



                    {
                        user?.uid ?
                            <>
                                <span className="ms-3 me-3 text-bold " > <strong> {user?.displayName}</strong>  </span>
                                {user?.photoURL ?
                                    <>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">{user?.displayName} Nice to meet you! </Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <Button
                                                    variant="light"
                                                    {...triggerHandler}
                                                    className="d-inline-flex align-items-center"
                                                >
                                                    <Image
                                                        style={{ height: '30px' }}
                                                        ref={ref}
                                                        roundedCircle
                                                        src={user.photoURL}
                                                    />
                                                </Button>
                                            )}
                                        </OverlayTrigger>

                                    </>



                                    :


                                    <FaUserAlt></FaUserAlt>
                                }

                                <Button className="ms-3 me-3 " style={{ border: '1px solid lightblue' }} onClick={handleLogOut} variant="light">Log Out</Button>


                            </>
                            :
                            <> <Link to='login' ><Button variant="outline-success" className="me-2" >Login</Button></Link>
                                <Link to='register' ><Button variant="outline-success" className="me-2" >Register</Button></Link>

                            </>
                    }


                    <span className="me-4" ><BsFillBrightnessHighFill></BsFillBrightnessHighFill> </span>
                </div>

            </div>
            <hr className='mb-3 text-muted' />

        </>
    );
};

export default ProfileMenu;