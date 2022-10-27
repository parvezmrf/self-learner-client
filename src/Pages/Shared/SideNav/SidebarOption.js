import React from 'react';
import { Link } from "react-router-dom";

const SidebarOption = ({ course }) => {
    const { name, id } = course;

    return (
        <div  >
            <p className='m2-1 bg-dark fs-4 '> <Link to={`/course/${id}`} className='ps-5 lh-lg ' > {name} </Link>  </p>
        </div>
    );
};

export default SidebarOption;