import React from 'react'

const UserInfo = ({name,age,city}) => {
  return (
    <div>
      <h1> {name} is {age} year old and lives in {city} </h1>
    </div>
  );
};

export default UserInfo;
