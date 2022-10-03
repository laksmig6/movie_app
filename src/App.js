import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesList from "./components/moviesList";
import MovieTitle from "./components/movieTitle";
import SearchBar from "./components/searchBar";
import AddFavourites from "./components/addFavourites";
import RemoveFAvourites from "./components/removeFAvourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

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

  const AddFavouriteMovies = (movie) => {
    const newFavList = [...favourites, movie];
    setFavourites(newFavList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavList = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(newFavList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
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
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <MovieTitle heading="Favourites" />
      </div>
      <div className="row">
        <MoviesList
          movies={favourites}
          handleFavClick={RemoveFavouriteMovie}
          favouriteComponent={RemoveFAvourites}
        />
      </div>
    </div>
  );
};

export default App;
