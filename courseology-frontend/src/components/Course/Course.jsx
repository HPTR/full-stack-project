import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./Course.scss";

const Course = () => {

  const {courseId} = useParams();
  const [course, setCourse] = useState({});

  const getCourseById = async (courseId) => {
    const response = await fetch(`http://localhost:8080/course/${courseId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "credentials": 'same-origin',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(res => res.json());
    setCourse(response);
  };

  useEffect(() => {
    getCourseById(courseId);
  }, [courseId]);

  return (
    <div className='course'>
      <Link to="/">
        <button className='course__back-button'>Back</button>
      </Link>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="course__stat-container">
        <div className='course__stat-pair'>
          <p className='course__stat-title'>Price</p>
          <p className='course__stat'>{course.price}</p>
        </div>
        <div className='course__stat-pair'>
          <p className='course__stat-title'>Course Length</p>
          <p className='course__stat'>{course.completion_time}</p>
        </div>
        <div className='course__stat-pair'>
          <p className='course__stat-title'>Language</p>
          <p className='course__stat'>{course.language}</p>
        </div>
        <div className='course__stat-pair'>
          <p className='course__stat-title'>Author</p>
          <p className='course__stat'>{course.created_by}</p>
        </div>
      </div>
    </div>
  )
}

export default Course