import React from 'react'

const CourseInfo = ({courseName,instructor, duration}) => {
  return (
    <div>
        <h1>{courseName}</h1>
      <h1>{instructor}</h1>
      <h1>{duration}</h1>
    </div>
  );
};

export default CourseInfo;
