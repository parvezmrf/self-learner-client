import React, { useEffect } from 'react';
import { useState } from 'react';
import SigngleCourse from './SigngleCourse';



const Courses = () => {
    const [courses, SetCourse] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => SetCourse(data))
    }, [])





    return (
        <div className='d-flex gap-3 flex-wrap m-5 ' >
            {
                courses.map(course => <SigngleCourse

                    key={course.id}
                    course={course}
                ></SigngleCourse>)
            }


        </div>
    );
};

export default Courses;