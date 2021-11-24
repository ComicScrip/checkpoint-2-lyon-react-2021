import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';

function GameList() {
  const [gameList, setGameList] = useState([]);

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
        {gameList.map((game) => {
          return (
            <li key={game.id}>
              <Game name={game.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GameList;
