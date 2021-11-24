import React, { useState } from 'react';

function Game({ name }) {
  const [deleteGame, setDeleteGame] = useState(false);

  return (
    <div className={`${deleteGame ? 'hidden' : 'flex flex-row gap-2'}`}>
      {name}
      <button type="button" onClick={() => setDeleteGame(!deleteGame)}>
        {' '}
        Delete{' '}
      </button>
    </div>
  );
}

export default Game;
