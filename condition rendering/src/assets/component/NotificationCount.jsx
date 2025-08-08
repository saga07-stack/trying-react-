import React from 'react'

const NotificationCount = ({notification}) => {
    if(notification <=0) return null;
  return (
    <div>
      <h1>bell {notification}</h1>
    </div>
  );
};

export default NotificationCount;
