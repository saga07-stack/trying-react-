import React, { use } from 'react'

const AdminTools = ({userRole}) => {
    if(userRole !== "admin") return null;
  return (
    <div>
      <h1> AdminTools</h1>
    </div>
  );
};

export default AdminTools;
