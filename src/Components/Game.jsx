import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
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
      <p>
        rating:{game.rating} / released:{game.released}
      </p>
    </div>
  );
};

export default Game;
