import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState();

  const getGame = async () => {
    const res = await axios.get(
      `https://wild-games.jsrover.wilders.dev/games/${id}`
    );
    setGame(res.data);
  };

  useEffect(() => {
    getGame();
  }, []);

  if (!game) {
    return <h1>Loading .. </h1>;
  }

  return <div>GameDetails de {game.name}</div>;
}

export default GameDetails;
