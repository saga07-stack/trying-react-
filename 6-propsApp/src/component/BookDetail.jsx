import React from 'react'

const BookDetail = (props) => {
    const { title, author, pages} = props.book;
  return (
    <div>
      <h1>{title}</h1>
      <h2> {author} </h2>
      <h2>{pages}</h2>
    </div>
  );
};

export default BookDetail;
