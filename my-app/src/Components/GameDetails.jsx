import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function GameDetails() {
  const { id } = useParams();
  const [game, setGames] = useState();

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => {
        setGames(res.data);
      });
  }, [id]);

  if (!game) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h2>{game.name}</h2>
      <p>
        rating:{game.rating} / released:{game.released}
      </p>
    </div>
  );
}

export default GameDetails;
