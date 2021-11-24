import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";

const GameList = () => {
  useEffect(() => {
    axios.get("https://wild-games.jsrover.wilders.dev/games").then((res) => {
      setGameCollection(res.data);
    });
  }, []);

  const [gameCollection, setGameCollection] = useState([]);
  const [list, setList] = useState(false);

  const filterList = () => {
    setList(!list);
  };

  return (
    <>
      <div className="gameList">
        <button onClick={filterList}>{list ? "ALL GAMES" : "BEST GAME EVER"}</button>
        {gameCollection
          .filter((game) => !list || game.rating >= 4.5)
          .map((game) => (
            <>
              <ul>
                <Game key={game.id} game={game} />
              </ul>
            </>
          ))}
      </div>
    </>
  );
};

export default GameList;