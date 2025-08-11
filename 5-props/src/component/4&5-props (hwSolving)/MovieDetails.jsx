import React from 'react'

const MovieDetails = (props) => {
  return (
    <div>
      <h1>MovieName: {props.movieName} directed by {props.directed} was release in {props.release} </h1>
    </div>
  );
};

export default MovieDetails;
