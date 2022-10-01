import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesList from "./components/moviesList";
import MovieTitle from "./components/movieTitle";
import SearchBar from "./components/searchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <MovieTitle heading="movies" />
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="row">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};

export default App;
