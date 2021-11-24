import React from "react";

const Game = ({ name, released, rating, genres }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Released date: {released}</p>
      <span>Rating: {rating}🌟 </span>
      <p>Genre : {genres}</p>
    </div>
  );
};

export default Game;
