import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavouritesList from "../components/favouritesList";
import { FavouritesContext } from "../components/context/favouritesContext";
import RemoveFAvourites from "../components/removeFAvourites";

const Favourites = () => {
  const { favourites, RemoveFavouriteMovie } = useContext(FavouritesContext);
  const navigate = useNavigate();

  const getDetails = (movie) => {
    navigate(`/details/id=${movie.imdbID}`);
  };

  return (
    <>
      <h1>Favourites</h1>
      <div className="container-fluid movie-app mt-5">
        <FavouritesList
          getDetails={getDetails}
          favourites={favourites}
          RemoveFavouriteMovie={RemoveFavouriteMovie}
          RemoveFAvourites={RemoveFAvourites}
        />
      </div>
    </>
  );
};

export default Favourites;
