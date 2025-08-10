import React from 'react'

const BookInfo = ({title, author, year}) => {
  return (
    <div>
     <h1>{title}</h1>
     <h1>{author}</h1>
     <h1>{year}</h1> 
    </div>
  );
};

export default BookInfo;
