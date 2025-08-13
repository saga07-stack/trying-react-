import React from 'react'

const MovieDetail = ({movieName,director, releaseYear}) => {
  return (
    <div>
      <h1> {movieName} is directed by {director} was in {releaseYear} </h1>
    </div>
  );
};

export default MovieDetail;
