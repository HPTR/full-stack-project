package com.nology.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class CoursesController {

    @Autowired
    CoursesRepository coursesRepository;

    @Autowired
    CoursesService coursesService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable String id) {
        Course course = coursesService.findCourseById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(course);
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = coursesService.getAllCourses();
        return ResponseEntity.status(HttpStatus.FOUND).body(courses);
    }

    @DeleteMapping("/courses/{course}")
    public ResponseEntity<String> deleteCourse(@PathVariable String id) {
        coursesService.deleteCourse(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Course Deleted");
    }

    @PostMapping("/courses")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        coursesRepository.save(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(course);
    }

    @PutMapping("/courses")
    public ResponseEntity<String> updateCourse(@RequestBody Course course, String id) {
        coursesRepository.save(course);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Course Updated");
    }

}
