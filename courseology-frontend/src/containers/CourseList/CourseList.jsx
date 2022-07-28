import React, {useState, useEffect} from 'react';
import CourseListItem from '../../components/CourseListItem/CourseListItem';
import "./CourseList.scss"

const CourseList = ({ courses }) => {

  const [search, setSearch] = useState("")

  const handleSearchChange = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearch(cleanInput);
  }

  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(search));

  useEffect(() => {
    
  }, []);

  return (
    <div className="course-list">
      <input className='course-list__search' type="text" value={search} onChange={handleSearchChange} placeholder="Search for a course" />
      <table className='course-list__table'>
          <thead className='course-list__header'>
            <tr>
              <th className='col-1 table-column'>Course Name</th>
              <th className='col-2 table-column'>Language</th>
              <th className='col-3 table-column'>Course Length</th>
              <th className='col-4 table-column'>Author</th>
              <th className='col-5 table-column'>Price</th>
              <th className='col-6 table-column'>Date Created</th>
            </tr>
          </thead>
          <tbody className='course-list__list'>
            {filteredCourses.map(course => <CourseListItem course={course} />)}
          </tbody>
      </table>
    </div>
  )
}

export default CourseList