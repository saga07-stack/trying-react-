import React from 'react'
import Course from './component/Course'

const courses = [
  { id: 501, title: "React for Beginners", instructor: "Mandip Dhakal", duration: "4 weeks" },
  { id: 502, title: "Advanced JavaScript", instructor: "Sita Sharma", duration: "6 weeks" },
  { id: 503, title: "Python for Data Science", instructor: "Ram Khatri", duration: "8 weeks" },
];


const App = () => {
  return (
    <div>
      { courses.map((course)=>(
        <Course
          key = {course.id}     
          instructor = {course.instructor}>
            <h1> title = {course.title} </h1>
            <h2>instructor {course.instructor} </h2>
            <h2> duration = {course.duration} </h2>
          </Course>

      )) }
    </div>
  )
}

export default App
