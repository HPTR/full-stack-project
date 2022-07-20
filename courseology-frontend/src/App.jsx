import logo from './logo.svg';
import './App.css';
import Courses from './containers/Courses/Courses';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
