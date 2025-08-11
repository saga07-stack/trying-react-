import React from 'react'

const BookInfo = (props) => {
  return (
    <div>
      <h1> title: {props.title}</h1>
      <h1> author: {props.author}</h1>
      <h1> year: {props.year}</h1>
    </div>
  );
};

export default BookInfo;
