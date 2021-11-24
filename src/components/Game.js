import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  useEffect(() => {
    try {
      const getGame = async () => {
        const res = await axios.get(
          `https://wild-games.jsrover.wilders.dev/games/${id}`
        );
        setGame(res.data);
      };
      getGame();
    } catch {
      console.error("err");
    } finally {
      console.log("your game");
    }
  }, [id]);

  if (!game) {
    return (
      <div>
        <span>Loading</span>
      </div>
    );
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.released}</p>
      <img src="{game.background_image}" />
    </div>
  );
};

export default Game;
