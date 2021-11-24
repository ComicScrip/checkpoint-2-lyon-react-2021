import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Game({ game }) {
  const [deleteGame, setDeleteGame] = useState(false);

  return (
    <div
      className={`${
        deleteGame
          ? 'hidden'
          : 'flex flex-col gap-2 items-center bg-gray-900 pb-4 rounded-lg'
      }`}
    >
      <Link to={`/games/${game.id}`}>
        <div id="gameTile" className="text-white">
          <img
            src={game.background_image}
            className=" w-64 h-52 mb-2 rounded-lg"
            alt={game.name}
          />
          {game.name}
        </div>
      </Link>
      <button
        type="button"
        onClick={() => setDeleteGame(!deleteGame)}
        className="bg-red-700 rounded-md w-1/4"
      >
        {' '}
        Delete{' '}
      </button>
    </div>
  );
}

export default Game;
