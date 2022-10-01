import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesList from "./components/moviesList";

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Guardians of the Galaxy",
      Year: "2014",
      imdbID: "tt2015381",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    },
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Year: "2017",
      imdbID: "tt3896198",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      Title: "Rise of the Guardians",
      Year: "2012",
      imdbID: "tt1446192",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg",
    },
    {
      Title: "Legend of the Guardians: The Owls of Ga'Hoole",
      Year: "2010",
      imdbID: "tt1219342",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE0NjA5OTA4N15BMl5BanBnXkFtZTcwODA3MTA3Mw@@._V1_SX300.jpg",
    },
    {
      Title: "The Guardians",
      Year: "2017",
      imdbID: "tt4600952",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTIwY2I1NDAtYjJhOS00N2Q4LWE4YjAtZDQ3ZTA4MzcwMzRkL2ltYWdlXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_SX300.jpg",
    },
    {
      Title: "7 Guardians of the Tomb",
      Year: "2018",
      imdbID: "tt4915672",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjMzZDI4YmEtZDIwNS00YWQ5LTkzN2UtMzJiMTliNjZiMzRjXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg",
    },
    {
      Title: "Naruto the Movie 3: Guardians of the Crescent Moon Kingdom",
      Year: "2006",
      imdbID: "tt1071815",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjk2ZWIzOTYtMGUxMC00MzdhLWI3ZGMtZGJhNzZmMDYxYjJlXkEyXkFqcGdeQXVyMjQ3NTQ4MjQ@._V1_SX300.jpg",
    },
    {
      Title: "The Guardians of Justice (Will Save You!)",
      Year: "2022–",
      imdbID: "tt16549788",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWNjZDcxZjEtODEzNC00MTFiLWJlYzAtMGIzNzc5YTkyMGI0XkEyXkFqcGdeQXVyOTQyMjgwMzQ@._V1_SX300.jpg",
    },
    {
      Title: "Guardians of the Galaxy",
      Year: "2015–2019",
      imdbID: "tt4176370",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDM4NDQxMDU2MV5BMl5BanBnXkFtZTgwMDY2MDQ5NjE@._V1_SX300.jpg",
    },
    {
      Title: "Halo 5: Guardians",
      Year: "2015",
      imdbID: "tt3467114",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAzMjIzMjY4OF5BMl5BanBnXkFtZTgwNDM5NzQxNzE@._V1_SX300.jpg",
    },
  ]);
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};

export default App;
