import { Link } from "react-router-dom";
import React from 'react';
import Logo from '../../../assets/logo.png'

const ProfileMenu = () => {

    const uuud = {
        id: 10,
        name: 'Parvez',
        age: 'pp'
    }

    console.log(uuud.id)
    return (
        <>
            <div className='d-flex justify-content-between mt-3 ' >
                <div className='d-flex ms-3 ' >
                    <img style={{ height: '40px' }} src={Logo} alt="" />
                    <h3 className="ms-3" >Self Learner</h3>
                </div>
                <input className='w-50 text-center border-0 rounded-5 mt-2' type="text" placeholder='Search Your Course here' />
                <div>

                    {uuud.id ? <span>
                        <Link to='login' ><button className='btn btn-success me-2' >Login</button></Link>
                        <Link to='register' ><button className='btn btn-success me-2' >Register</button></Link>

                    </span> : <span>None</span>

                    }

                    <img style={{ height: '40px' }} src={Logo} alt="" />
                    <button className='btn btn-info me-2' >LogOut</button>
                    <span className="me-4" >Theme Dark/Light</span>
                </div>

            </div>
            <hr className='mb-3 text-muted' />
        </>
    );
};

export default ProfileMenu;