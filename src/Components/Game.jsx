import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Game = ({ id, name, rating, released }) => {
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
      <h2>
        <Link to={`/game/${id}`}>{name}</Link>
      </h2>
      <p>
        rating:{rating} / released:{released}
      </p>
    </div>
  );
};

export default Game;
