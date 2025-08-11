import React from 'react'

const StudentProfile = (props) => {
  return (
    <div>
      <h1>{props.studentName} studies in grade {props.grade}, and {props.school} </h1>
    </div>
  );
};

export default StudentProfile;
