import React, { useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ background, name, released, id }) => {
  const [rempoveGame, setremoveGame] = useState(false);

  return (
    <div
      className={`${
        rempoveGame
          ? "hidden"
          : "flex justify-center items-center px-10 bg-gray-500 text-white font-extrabold text-2xl"
      }`}
    >
      <Link to={`/games/${id}`}>{name}</Link>
      <div className="flex flex-row items-center justify-center pb-20">
        <img className="w-1/2 rounded-lg" src={background} alt={background} />
      </div>
      <div className="release">
        <span>
          <p>{released}</p>
        </span>
      </div>
      <button
        className="text"
        type="button"
        onClick={() => setremoveGame(!rempoveGame)}
      >
        Remove
      </button>
    </div>
  );
};

export default Game;
