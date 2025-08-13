import React from 'react'

const StudentInfos = (props) => {
    const { id , name , grade} = props.student;
  return (
    <div>
      <h1> {name} {grade} {id} </h1>
    </div>
  );
};

export default StudentInfos;
