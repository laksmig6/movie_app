import React from "react";

const MoviesList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
        >
          <img src={movie.Poster} />
          <div
            onClick={() => props.handleFavClick(movie)}
            className="overlay d-flex align-items-center justify-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MoviesList;
