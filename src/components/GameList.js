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
    <div id="listGame" className="flex flex-col gap-8 pt-10">
      <button
        type="button"
        onClick={() => setFilter(!filter)}
        className="bg-blue-500 p-2 rounded-lg"
      >
        {' '}
        {filter ? 'Show All Films' : 'Show only Good Films '}
      </button>
      <ul className="flex flex-col gap-8">
        {!filter
          ? gameList.map((game) => {
              return (
                <li key={game.id}>
                  <Game game={game} />
                </li>
              );
            })
          : gameList
              .filter((game) => game.rating >= 4.5)
              .map((game) => {
                return (
                  <li key={game.id}>
                    <Game game={game} />
                  </li>
                );
              })}
      </ul>
    </div>
  );
}

export default GameList;
