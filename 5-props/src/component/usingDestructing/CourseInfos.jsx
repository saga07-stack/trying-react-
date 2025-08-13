import React from 'react'

const CourseInfos = ({courseName, instructor , duration}) => {
  return (
    <div>
      <h1> {courseName} taught by {instructor} lasts for {duration} time </h1>
    </div>
  );
};

export default CourseInfos;
