import React from 'react'

const MovieInfo = ({movie}) => {
  const {name,director,year} = movie;
  return (
    <div>
      <h1> {name} </h1>
      <h2> {director} </h2>
      <h3> {year} </h3>
    </div>
  );
};

export default MovieInfo;
