import React from 'react'

const EmployeeInfo = (props) => {
  return (
    <div>
      <h1> {props.employeeName} works as a {props.position} in the {props.department} </h1>
    </div>
  );
};

export default EmployeeInfo;
