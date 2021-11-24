import React, { useState } from "react";
import { Link } from "react-router-dom";

const Game = (props) => {
  const { game } = props;
  const [deleteGame, setDeleteGame] = useState(false);

  return (
    <div className={`${deleteGame ? "hidden" : "flex" }`}>
      <div>
        <img src={game.background_image} alt="Game_Image" className="image" />
        <h2>{game.name}</h2>
        <h3> Date de sortie : {game.released}</h3>
        <h3> Note : {game.rating}/5 ⭐️</h3>
        <Link to={`/games/${game.id}`}>
          <button>Show me more about {game.name}</button>
        </Link>
        <button onClick={() => setDeleteGame(!deleteGame)}>Supprimer</button>
      </div>
    </div>
  );
};

export default Game;
