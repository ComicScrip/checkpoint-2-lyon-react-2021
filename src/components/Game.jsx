import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Game({ name, id }) {
  const [rempoveGame, setrempoveGame] = useState(false);

  return (
    <div className={`${rempoveGame ? 'hidden' : 'flex flex-row gap-2'}`}>
      <Link to={`/games/${id}`}>{name}</Link>
      <button type="button" onClick={() => setrempoveGame(!rempoveGame)}>
        Remove
      </button>
    </div>
  );
}

export default Game;