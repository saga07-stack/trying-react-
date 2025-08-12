import React from 'react'

const MovieDetail = ({movieDetails}) => {
  const { movieName, director , releaseYear} = about.movieDetails;
  return (
    <div>
      <h1> {director} and {movieName} and {releaseYear}  </h1>
    
    </div>
  );
};

export default MovieDetail;

