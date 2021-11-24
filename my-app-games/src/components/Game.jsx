import React, { useState } from "react";

const Game = (props) => {
  const { game } = props;

  return (
    <div>
      <div>
        <img src={game.background_image} alt="Game_Image" className="image" />
        <h2>{game.name}</h2>
        <h3> Date de sortie : {game.released}</h3>
        <h3> Note : {game.rating}/5 ⭐️</h3>
        <button>Supprimer</button>
      </div>
    </div>
  );
};

export default Game;
