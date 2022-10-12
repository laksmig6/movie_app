import React, { useContext } from "react";
import FavouritesList from "../components/favouritesList";
import { FavouritesContext } from "../components/context/favouritesContext";
import RemoveFAvourites from "../components/removeFAvourites";

const Favourites = () => {
  const { favourites, RemoveFavouriteMovie } = useContext(FavouritesContext);

  return (
    <>
      <h1>Favourites</h1>
      <div className="container-fluid movie-app mt-5">
        <FavouritesList
          favourites={favourites}
          RemoveFavouriteMovie={RemoveFavouriteMovie}
          RemoveFAvourites={RemoveFAvourites}
        />
      </div>
    </>
  );
};

export default Favourites;
