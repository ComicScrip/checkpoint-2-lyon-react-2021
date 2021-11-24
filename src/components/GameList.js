import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const GameList = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    try {
      const getGameList = async () => {
        const res = await axios.get(
          "https://wild-games.jsrover.wilders.dev/games "
        );
        setGameList(res.data);
      };
      getGameList();
    } catch {
      console.error("err");
    } finally {
      console.log("This is your game");
    }
  }, []);

  return (
    <div>
      <ul>
        {gameList.map((game) => (
          <li key={game.id}> {game.name}</li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default GameList;

// https://wild-games.jsrover.wilders.dev/games
