import React from "react";
import { Link } from "react-router-dom";

function Games({ id, name, rating }) {
  return (
    <div>
      <h1>
        {" "}
        <Link to={`/${id}`}>{name} </Link>{" "}
      </h1>
      <p>
        <span>Rating: {rating}</span>
      </p>
    </div>
  );
}

export default Games;
