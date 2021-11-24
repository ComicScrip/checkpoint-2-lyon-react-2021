import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Game({ name, id }) {
  const [deleteGame, setDeleteGame] = useState(false);

  return (
    <div className={`${deleteGame ? 'hidden' : 'flex flex-row gap-2'}`}>
      <Link to={`/games/${id}`}>{name}</Link>
      <button type="button" onClick={() => setDeleteGame(!deleteGame)}>
        {' '}
        Delete{' '}
      </button>
    </div>
  );
}

export default Game;
