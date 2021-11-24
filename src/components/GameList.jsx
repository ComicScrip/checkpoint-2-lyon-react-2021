import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const [gameFilter, setGameFilter] = useState('');
  useEffect(() => {
    axios.get('https://wild-games.jsrover.wilders.dev/games').then((res) => {
      setGameList(res.data);
    });
  }, []);

  return (
    <div>
      <input
        placeholder='post filter'
        value={gameFilter}
        onChange={(e) => setGameFilter(e.target.value)}
      />

      <ul>
        {gameList
          .filter((post) => post.name.includes(gameFilter))
          .map(({ name, id }) => (
            <li key={id}>
              <Link to={`/${id}`}>{name} </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GameList;
