import React, { useState, createContext } from "react";

export const FavouritesContext = createContext();

function FavouriteContextProvider(props) {
  const [favourites, setFavourites] = useState([]);

  const AddFavouriteMovies = (movie) => {
    const newFavList = [...favourites, movie];
    setFavourites(newFavList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavList = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(newFavList);
  };

  const fav = { favourites, AddFavouriteMovies, RemoveFavouriteMovie };

  return (
    <FavouritesContext.Provider value={fav}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouriteContextProvider;
