import React, { useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ background,name, id }) => {
  const [rempoveGame, setremoveGame] = useState(false);

  return (
    <div className={`${rempoveGame ? "hidden" : "flex flex-row gap-2"}`}>
      <Link to={`/games/${id}`}>{name}</Link>
      <button type="button" onClick={() => setremoveGame(!rempoveGame)}>
        Remove
      </button>
      <img src={background} alt={id.name} />
    </div>
  );
};

export default Game;
