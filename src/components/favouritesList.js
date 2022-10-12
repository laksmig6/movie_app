import React from "react";
import MovieTitle from "./movieTitle";
import MoviesList from "./moviesList";

const FavouritesList = (props) => {
  return (
    <>
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <MovieTitle heading="Favourites" />
      </div>
      <div className="row">
        <MoviesList
          movies={props.favourites}
          handleFavClick={props.RemoveFavouriteMovie}
          favouriteComponent={props.RemoveFAvourites}
        />
      </div>
    </>
  );
};
export default FavouritesList;
