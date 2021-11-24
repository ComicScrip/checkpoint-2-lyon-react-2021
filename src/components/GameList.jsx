// <GameList /> component, you will need to get the list from the API,
//and map it in your jsx. For each game you get from the API,
// display a < Game /> component.

// API : https://wild-games.jsrover.wilders.dev/games
// IF DOESN'T WORK, CHECKOUT THE MIRROR API : https://apis.wilders.dev/wild-games

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  useEffect(() => {
    axios.get("https://wild-games.jsrover.wilders.dev/games").then((res) => {
      setGameList(res.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {gameList.map(({ name }) => (
          <li> {name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
