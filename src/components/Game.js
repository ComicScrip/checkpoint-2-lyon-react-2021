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
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl text-center p-15 m-10"></h1>
      <p className=" text-xl text-center">Released : {game.released}</p>
      <p className="p-5 m-5 text-center">Rating = {game.rating} / 5 </p>
      <img
        className="image self-center"
        alt="game img"
        src={game.background_image}
      />
    </div>
  );
};

export default Game;
