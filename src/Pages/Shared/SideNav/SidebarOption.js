import React from 'react';
import { Link } from "react-router-dom";
import './SidebarOption.css';

const SidebarOption = ({ course }) => {
    const { name, id } = course;

    return (
        <div  >
            <p className='bg-option fs-4 '> <Link to={`/course/${id}`} className='ps-5 lh-lg ' > {name} </Link>  </p>
        </div>
    );
};

export default SidebarOption;