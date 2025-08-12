import React from 'react'

const Users = ({title,director,year}) => {
  return (
    <div>
      <h1> {title} </h1>
      <h2> {director} </h2>
      <h3> {year} </h3>
    </div>
  );
};

export default Users;
