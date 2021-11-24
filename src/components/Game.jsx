import React, { useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ background,name, id }) => {
  const [rempoveGame, setremoveGame] = useState(false);

  return (
    <div className={`${rempoveGame ? "hidden" : "flex justify-center items-center px-10"}`}>
      <Link to={`/games/${id}`}>{name}</Link>
    
      <div className="flex flex-row items-center justify-center">
      <img className="w-10/12 rounded-lg" src={background} alt={id.name} />
      </div>
        <button className="flex" type="button" onClick={() => setremoveGame(!rempoveGame)}>
        Remove
      </button>
    </div>
  );
};

export default Game;
