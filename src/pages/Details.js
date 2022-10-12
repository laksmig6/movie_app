import React, { useEffect, useState, useContext } from "react";
import MovieDetails from "../components/details";
import SelectedContext from "../components/context/selectedContext";

const Details = () => {
  const { selectedMovie } = useContext(SelectedContext);
  const [details, setDetails] = useState({});

  const imdbID = selectedMovie.imdbID;

  const getMovieDetails = async () => {
    const getDetailUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=3922a248`;
    const response = await fetch(getDetailUrl);

    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson) {
      setDetails(responseJson);
    }
  };

  useEffect(() => {
    getMovieDetails(selectedMovie.imdbID);
  }, []);

  return (
    <>
      <h1>Details Component</h1>
      <MovieDetails movie={details} />
    </>
  );
};

export default Details;
