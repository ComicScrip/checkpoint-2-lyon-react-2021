import React, { useEffect, useState } from "react";
import axios from "axios";

const GameList = () => {
  const [gameList, setGameList] = useState("");
  const [onlyMinRate, setOnlyMinRate] = useState(false);

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
      <button onClick={() => setOnlyMinRate(!onlyMinRate)}>
        {" "}
        Note min 4.5
      </button>
      <ul>
        {gameList
          .filter((elem) => (elem.rating > 4.5 ? onlyMinRate : !onlyMinRate))
          .map(({ id, name }) => (
            <li key={id}>({name})</li>
          ))}
      </ul>
    </>
  );
};

export default GameList;
