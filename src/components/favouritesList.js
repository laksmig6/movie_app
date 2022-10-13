import React from "react";
import { useNavigate } from "react-router-dom";
import MovieTitle from "./movieTitle";
import MoviesList from "./moviesList";

const FavouritesList = (props) => {
  const navigate = useNavigate()
  const getDetails = (movie) => {
    navigate(`/details/${movie.imdbID}`);
  };

  return (
    <>
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <MovieTitle heading="Favourites" />
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
