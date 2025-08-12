import React from 'react'

const BookInfos = ({title,author,year}) => {
  return (
    <div>
      <h1> {title}, by {author} was published in {year} </h1>
    </div>
  );
};

export default BookInfos;
