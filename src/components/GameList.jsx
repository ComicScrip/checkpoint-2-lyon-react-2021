import axios from "axios";
import React, { useState, useEffect } from "react";
import Game from "./Game";

const GameList = () => {
  const [gameList, setGameList] = useState(null);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    axios
      .get("https://wild-games.jsrover.wilders.dev/games")
      .then((res) => setGameList(res.data));
  }, []);

  if (!gameList) return <p>LOADING</p>;
  return (
    <div>
      <button onClick={() => setFilter(!filter)}>
        Get highest rating games !
      </button>
      {gameList
        .filter((game) => (game.rating > 4.5 ? filter : !filter))
        .map(({ id, name, rating, released }) => (
          <Game
            key={id}
            id={id}
            name={name}
            rating={rating}
            released={released}
          />
        ))}
    </div>
  );
};

export default GameList;
