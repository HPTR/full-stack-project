import React from 'react'
import "./CourseListItem.scss"
import { Link } from 'react-router-dom';

const CourseListItem = ({ course }) => {

  const { id, completion_time, created_by, dateCreated, language, price, title } = course;

  return (
    <Link to={"/course/" + id}>
      <tr className='course-list-item' key={id}>
        <td className='course-list-item__title table-column col-1'>{title}</td>
        <td className='course-list-item__language table-column col-2'>{language}</td>
        <td className='course-list-item__completion-time table-column col-3'>{completion_time}</td>
        <td className='course-list-item__created-by table-column col-4'>{created_by}</td>
        <td className='course-list-item__price table-column col-5'>{price}</td>
        <td className='course-list-item__date-created table-column col-6'>{dateCreated}</td>
      </tr>
    </Link>
  )
}

export default CourseListItem