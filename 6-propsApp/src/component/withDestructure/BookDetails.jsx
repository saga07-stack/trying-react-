import React from 'react'

const BookDetails = ({book}) => {
    const {title, author, pages} = book;
  return (
    <div>
      <h1> {title} </h1>
      <h2> {author} </h2>
      <h2> {pages} </h2>
    </div>
  );
};

export default BookDetails;
