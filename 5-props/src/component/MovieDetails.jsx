import React from 'react'

const MovieDetails = ({movieDetails,movieName,releaseDate,directorName}) => {
  return (
    <div>
        <h1>{movieName}</h1>
        <h1>{movieDetails}</h1>
        <h1>{releaseDate}</h1>
        <h1> {directorName}</h1>
      
    </div>
  );
};

export default MovieDetails;
