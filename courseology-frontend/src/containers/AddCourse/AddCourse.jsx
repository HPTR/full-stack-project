import React, { useState } from 'react'
import "./AddCourse.scss"

const AddCourse = () => {

    const [newCourse, setNewCourse] = useState({
        title: "",
        description: "",
        price: "",
        completion_time: "",
        language: "",
        created_by: "",
    });

    const handleSubmit = async (event) => {
        await fetch("http://localhost:8080/courses", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "credentials": 'same-origin',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify(newCourse)
        })
        event.target.reset();
    };



    return (
        <div className="add-course">
            <form className='add-course__form' onSubmit={handleSubmit}>
                <label className='add-course__label' htmlFor="title">Title</label>
                <input className='add-course__input' name="title" type="text" onInput={(event) => setNewCourse({ ...newCourse, title: event.target.value })} />
                <label className='add-course__label' htmlFor="description">Description</label>
                <input className='add-course__input' name="description" type="textbox" onInput={(event) => setNewCourse({ ...newCourse, description: event.target.value })} />
                <label className='add-course__label' htmlFor="price">Price</label>
                <input className='add-course__input' name="price" type='text' onInput={(event) => setNewCourse({ ...newCourse, price: event.target.value })} />
                <label className='add-course__label' htmlFor="completion-time">Completion Time</label>
                <input className='add-course__input' name="completion-time" type='text' onInput={(event) => setNewCourse({ ...newCourse, "completion_time": event.target.value })} />
                <label className='add-course__label' htmlFor="language">Language</label>
                <input className='add-course__input' name="language" type='text' onInput={(event) => setNewCourse({ ...newCourse, language: event.target.value })} />
                <label className='add-course__label' htmlFor="author">Author</label>
                <input className='add-course__input' name="author" type='text' onInput={(event) => setNewCourse({ ...newCourse, "created_by": event.target.value })} />
                <input className='add-course__submit' type="submit" />
            </form>
        </div>
    )
}

export default AddCourse