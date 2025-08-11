import React from 'react'

const CourseInfo = (props) => {
  return (
    <div>
      <h1> {props.name} taught by {props.instructor} lasts for {props.duration} weeks </h1>
    </div>
  );
};

export default CourseInfo;
