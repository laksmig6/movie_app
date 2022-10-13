import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/details";

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const getMovieDetails = async () => {
    const getDetailUrl = `https://www.omdbapi.com/?i=${id}&apikey=3922a248`;
    const response = await fetch(getDetailUrl);

    const responseJson = await response.json();
    if (responseJson) {
      setDetails(responseJson);
    }
  };

  useEffect(() => {
    getMovieDetails(id);
  }, []);

  return (
    <>
      <h1>Movie Details</h1>
      <div className="container-fluid movie-app mt-5">
        <MovieDetails movie={details} />
      </div>
    </>
  );
};

export default Details;
