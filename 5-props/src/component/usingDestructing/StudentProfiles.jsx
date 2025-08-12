import React from 'react'

const StudentProfile = ({studentName,grade,school}) => {
  return (
    <div>
      <h1> {studentName} studies in grade {grade} at {school} </h1>
    </div>
  );
};

export default StudentProfile;
