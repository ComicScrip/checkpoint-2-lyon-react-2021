import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const GameList = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    axios
      .get("https://wild-games.jsrover.wilders.dev/games")
      .then((res) => res.data)
      .then((data) => {
        setGameList(data);
      });
  }, []);

  return <div>
      
  </div>;
};

export default GameList;
