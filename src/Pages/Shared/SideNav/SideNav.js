import React, { useEffect, useState } from 'react';
import SidebarOption from './SidebarOption';

const SideNav = () => {

    const [courses, SetCourse] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => SetCourse(data))
    }, [])

    return (
        <div className=' pt-5 ' >

            {
                courses.map(course => <SidebarOption

                    key={course.id}
                    course={course}
                ></SidebarOption>)
            }


        </div>
    );
};

export default SideNav;