import React from "react";

const MovieDetails = (props) => {
  const { Title } = props.movie;
  return (
    <div>
      <h2>Details component</h2>
      <span>{Title}</span>
    </div>
  );
};

export default MovieDetails;
