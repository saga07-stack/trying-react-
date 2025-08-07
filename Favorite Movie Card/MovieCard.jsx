import MovieTitle from "./MovieTitle";
import MoviePoster from "./MoviePoster";
import MovieDescription from "./MovieDescription";
import React from 'react'

const MovieCard = () => {
  return (
    <div>
      <MovieTitle/>
      <MoviePoster/>
      <MovieDescription/>
    </div>
  );
};

export default MovieCard;
