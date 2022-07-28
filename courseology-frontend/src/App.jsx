import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import CourseList from './containers/CourseList/CourseList';
import Course from './components/Course/Course';
import AddCourse from './containers/AddCourse/AddCourse';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("http://localhost:8080/courses", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "credentials": 'same-origin',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(res => res.json());
    setCourses(response);
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<CourseList courses={courses} />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path='/add-course' element={<AddCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
