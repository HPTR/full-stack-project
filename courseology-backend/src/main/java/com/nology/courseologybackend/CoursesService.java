package com.nology.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class CoursesService {

    @Autowired
    CoursesRepository coursesRepository;

    Course findCourseById(String id) {
        Course greeting = coursesRepository.findByid(id);
        if (greeting == null) {
            throw new CourseNotFoundException();
        }
        return greeting;
    }

    Course getRandomCourse() {
        List<Course> allCourses = coursesRepository.findAll();
        int randomIndex = new Random().nextInt(allCourses.size());
        return allCourses.get(randomIndex);
    }

    String deleteCourse(String id) {
        coursesRepository.deleteByid(id);
        return "Course deleted";
    }

    List<String> getAllCourseIds() {
        List<Course> allCourses = coursesRepository.findAll();
        List<String> greetingIds = new ArrayList<String>();
        allCourses.forEach(greeting -> greetingIds.add(greeting.getId()));
        return greetingIds;
    }

    List<Course> getAllCourses() {
        List<Course> allCourses = coursesRepository.findAll();
        return allCourses;
    }

}
