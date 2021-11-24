import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {

    axios
      .get(`https://wild-games.jsrover.wilders.dev/games${id}`)
      .then((res) => {
        setGame(res.data);
      });
  }, [id]);

  if (!game) {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  }

  return (
    <div>
      <h2>{game.name}</h2>
      <p>{game.body}</p>
    </div>
  );
};

export default Game;
