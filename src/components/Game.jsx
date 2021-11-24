import React from "react";
import { Link } from "react-router-dom";

function Game(props) {
  const { game } = props;
  return (
    <div>
      <div className="border-black">
        <img src={game.background_image} alt="gamePic" />
        <h2>{game.name}</h2>
        <h3>Release date: {game.released}</h3>
        <h3>Rating: {game.rating}/5</h3>
        <span>
          <Link to={`/games/${game.id}`}>{game.name} </Link>
        </span>
      </div>
    </div>
  );
}

export default Game;
