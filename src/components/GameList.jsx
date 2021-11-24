import axios from "axios";
import React, { useState, useEffect } from "react";
import Game from "./Game";

const GameList = () => {
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    axios
      .get("https://wild-games.jsrover.wilders.dev/games")
      .then((res) => setGameList(res.data));
  }, []);

  if (!gameList) return <p>LOADING</p>;
  return (
    <div>
      {gameList.map(({ name, rating, released }) => (
        <Game name={name} rating={rating} released={released} />
      ))}
    </div>
  );
};

export default GameList;
