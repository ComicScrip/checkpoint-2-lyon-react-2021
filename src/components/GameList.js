import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';

function GameList() {
  const [gameList, setGameList] = useState([]);
  const [filter, setFilter] = useState(false);

  const getGameList = async () => {
    const res = await axios.get('https://wild-games.jsrover.wilders.dev/games');
    console.log(res.data);
    setGameList(res.data);
  };

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <div>
      Game List :
      <ul>
        {!filter
          ? gameList.map((game) => {
              return (
                <li key={game.id}>
                  <Game name={game.name} />
                </li>
              );
            })
          : gameList
              .filter((game) => game.rating >= 4.5)
              .map((game) => {
                return (
                  <li key={game.id}>
                    <Game name={game.name} />
                  </li>
                );
              })}
      </ul>
      <button type="button" onClick={() => setFilter(!filter)}>
        {' '}
        {filter ? 'Show All Films' : 'Show only Good Films '}
      </button>
    </div>
  );
}

export default GameList;
