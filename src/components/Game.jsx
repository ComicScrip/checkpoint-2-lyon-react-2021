import React from "react";

const Game = ({ name, rating, released }) => {
  return (
    <div>
      <h2>{name}</h2>
      <span>Rating: {rating} ⭐</span>
      <p>Released: {released}</p>
    </div>
  );
};

export default Game;
