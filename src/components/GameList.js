import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
          return <li> {game.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default GameList;
