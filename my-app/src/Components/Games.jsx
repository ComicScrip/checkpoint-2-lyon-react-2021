import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const Games = () => {
  const { id } = useParams();
  const [game, setGames] = useState(null);

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => {
        setGames(res.data);
      });
  }, [id]);

  if (!Games) {
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

export default Games;
