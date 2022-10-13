import React from "react";

const MovieDetails = (props) => {
  const { Title, Plot, Director, Writer, Actors } = props.movie;
  return (
    <div>
      <h2>Movie Details</h2>
      <div className="my-3">
        <span className="fw-bold">Title : </span>
        {Title}
      </div>
      <div>{Plot}</div>
      <ul className="list-group mt-4">
        <li className="list-group-item">
          <span className="fw-bold">Directors : </span>
          {Director}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Writers : </span>
          {Writer}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Stars : </span>
          {Actors}
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
