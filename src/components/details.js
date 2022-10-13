import React from "react";

const MovieDetails = (props) => {
  const { Title, Plot, Director, Writer, Actors } = props.movie;
  return (
    <div>
      <h2>Details component</h2>
      <div className="my-3">{Title}</div>
      <div>{Plot}</div>
      <ul className="list-group mt-4">
        <li className="list-group-item">
          <span className="fw-bold mr-2">Directors : </span>
          {Director}
        </li>
        <li className="list-group-item">
          <span className="fw-bold mr-2">Writers : </span>
          {Writer}
        </li>
        <li className="list-group-item">
          <span className="fw-bold mr-2">Stars : </span>
          {Actors}
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
