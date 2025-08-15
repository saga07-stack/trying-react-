import Employee from "./component/Employee"
import React from 'react'



const  App = () => {
  const employees = [
  { id: 101, name: "Anil", age: 35, department: "Sales", salary: 60000 },
  { id: 102, name: "Rekha", age: 29, department: "Marketing", salary: 55000 },
  { id: 103, name: "Prakash", age: 40, department: "HR", salary: 62000 },
  { id: 104, name: "Sunita", age: 32, department: "Finance", salary: 58000 },
];
  const name = employees.map(employee => {
    return employee;
  });
  return (
    <div>
  <Employee
   name = {name}
  ></Employee>

    </div>
  );
};

export default  App;