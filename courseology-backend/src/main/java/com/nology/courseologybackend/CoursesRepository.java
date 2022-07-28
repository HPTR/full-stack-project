package com.nology.courseologybackend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//To add more methods this is the syntax and examples below
//<ReturnType> [operation]By[attribute]([parameter])

@Repository
public interface CoursesRepository extends JpaRepository<Course, String> {

    Course findByid(String id);

    // Can't return deleted item
    String deleteByid(String id);

}
