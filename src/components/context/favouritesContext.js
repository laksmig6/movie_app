import React, { useState, createContext } from "react";

export const FavouritesContext = createContext();

function FavouriteContextProvider(props) {
  const [favourites, setFavourites] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };

  const AddFavouriteMovies = (movie) => {
    var newFavList = favourites;
    if (favourites.indexOf(movie) < 0) {
      newFavList = [...favourites, movie];
    }
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavList = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  const ClearFavourites = () => {
    const newFavList = [];
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  const fav = {
    favourites,
    setFavourites,
    AddFavouriteMovies,
    RemoveFavouriteMovie,
    ClearFavourites,
  };

  return (
    <FavouritesContext.Provider value={fav}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouriteContextProvider;
