import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavouritesList from "../components/favouritesList";
import { FavouritesContext } from "../components/context/favouritesContext";
import RemoveFAvourites from "../components/removeFAvourites";

const Favourites = () => {
  const { favourites, setFavourites, RemoveFavouriteMovie } =
    useContext(FavouritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
    setFavourites(savedFavourites);
  }, []);

  const getDetails = (movie) => {
    navigate(`/details/${movie.imdbID}`);
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
