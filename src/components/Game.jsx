import React from "react";
import { Link } from "react-router-dom";

const Game = ({ id, name, rating, released }) => {
  return (
    <div>
      <h2>
        <Link to={`/games/${id}`}>{name}</Link>
      </h2>
      <span>Rating: {rating} ⭐</span>
      <p>Released: {released}</p>
    </div>
  );
};

export default Game;
