import React from 'react'

const MovieInfos = (props) => {
  const {name, director, year} = props.movies;
  return (
    <div>
      <h1> {name} </h1>
      <h2> {director} </h2>
      <h2> {year} </h2>
    </div>
  );
};

export default MovieInfos;
