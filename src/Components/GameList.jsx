import React, { useEffect, useState } from "react";
import axios from "axios";

const GameList = () => {
  const [gameList, setGameList] = useState("");

  useEffect(() => {
    axios.get("https://wild-games.jsrover.wilders.dev/games").then((res) => {
      setGameList(res.data);
      console.log(res.data);
    });
  }, []);

  if (!gameList) {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  }

  return (
    <>
      <ul>
        {gameList.map(({ id, name }) => (
          <li key={id}>({name})</li>
        ))}
      </ul>
    </>
  );
};

export default GameList;
