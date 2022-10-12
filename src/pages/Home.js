import React, { useState, useEffect, useContext } from "react";
import MovieTitle from "../components/movieTitle";
import SearchBar from "../components/searchBar";
import MoviesList from "../components/moviesList";
import { FavouritesContext } from "../components/context/favouritesContext";
import AddFavourites from "../components/addFavourites";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const { AddFavouriteMovies } = useContext(FavouritesContext);

  const getMoviesList = async () => {
    const searchurl = `https://www.omdbapi.com/?s=${search}&apikey=3922a248`;
    const response = await fetch(searchurl);

    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMoviesList();
  }, [search]);

  return (
    <>
      <h1>Home Component</h1>
      <div className="container-fluid movie-app mt-5">
        <div className="row d-flex align-items-center justify-content-between pt-4 mb-4">
          <MovieTitle heading="movies" />
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="row">
          <MoviesList
            movies={movies}
            handleFavClick={AddFavouriteMovies}
            favouriteComponent={AddFavourites}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
