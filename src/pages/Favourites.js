import React, { useContext } from "react";
import FavouritesList from "../components/favouritesList";
import { FavouritesContext } from "../components/context/favouritesContext";
import RemoveFAvourites from "../components/removeFAvourites";

const Favourites = () => {
  const { favourites, RemoveFavouriteMovie } = useContext(FavouritesContext);

  console.log("###", favourites);
  return (
    <>
      <h1>Favourites</h1>
      <FavouritesList
        favourites={favourites}
        RemoveFavouriteMovie={RemoveFavouriteMovie}
        RemoveFAvourites={RemoveFAvourites}
      />
    </>
  );
};

export default Favourites;
