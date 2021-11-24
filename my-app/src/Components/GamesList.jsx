import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Games from "./Games";

const GamesList = () => {
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
      <button onClick={() => setOnlyMinRate(!onlyMinRate)}>Note min 4.5</button>
      {gameList
        .filter((elem) => (elem.rating > 4.5 ? onlyMinRate : !onlyMinRate))
        .map(({ id, name, rating }) => (
          <Games key={id} name={name} rating={rating} />
        ))}
    </>
  );
};
export default GamesList;
