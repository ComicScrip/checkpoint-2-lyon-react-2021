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

  function handleClick() {
   setGameFilter(!gameFilter)
  }

  return (
    <div>
      
        <button onClick={handleClick}>
   Fiter rating note
      </button>
   

      <ul>
        {gameList
          .filter((post) => !gameFilter || post.rating >= 4.5)
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
