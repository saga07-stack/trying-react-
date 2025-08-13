import React from 'react'

const EmployeeInfos = ({employeeName,position, department}) => {
  return (
    <div>
      <h1> {employeeName}  works as a {position} in the {department} department </h1>
    </div>
  );
};

export default EmployeeInfos;
