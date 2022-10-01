import React from "react";

const MoviesList = (movies) => {
  return (
    <>
      {movies.movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-3">
          <img src={movie.Poster} />
        </div>
      ))}
    </>
  );
};

export default MoviesList;
