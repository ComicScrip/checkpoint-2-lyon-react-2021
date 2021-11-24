import React from "react";
import { Link } from "react-router-dom";

const Game = ({ id, name, rating }) => {
  return (
    <div>
      <h2>
        <Link to={`/games/${id}`}>{name}</Link>{" "}
      </h2>
      <p>Rating: {rating}🌟 </p>
    </div>
  );
};

export default Game;
