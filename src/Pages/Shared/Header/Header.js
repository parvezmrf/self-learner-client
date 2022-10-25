import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import ProfileMenu from './ProfileMenu';


const Header = () => {
    return (
        <div className='bg-light' >
            <ProfileMenu></ProfileMenu>

            <div className='header-link' >
                <Link to='/' >Homeee</Link>
                <Link to='/course' >Courses</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/blog' >Blog</Link>
            </div>
        </div>
    );
};

export default Header;