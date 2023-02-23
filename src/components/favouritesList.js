import React from "react";
import { useNavigate } from "react-router-dom";
import MovieTitle from "./movieTitle";
import MoviesList from "./moviesList";

const FavouritesList = (props) => {
  const navigate = useNavigate();
  const getDetails = (movie) => {
    navigate(`/details/${movie.imdbID}`);
  };

  return (
    <>
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <MovieTitle heading="Favourites" />
        <a onClick={props.ClearFavourites}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          Clear Favourites
        </a>
      </div>
      <div className="row">
        <MoviesList
          getDetails={props.getDetails}
          movies={props.favourites}
          handleFavClick={props.RemoveFavouriteMovie}
          favouriteComponent={props.RemoveFAvourites}
        />
      </div>
    </>
  );
};
export default FavouritesList;
