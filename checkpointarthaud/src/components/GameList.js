import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Game from "./Game";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const [onlyTheBestGames, setOnlyTheBestGames] = useState(false)
  function handleOnlyTheBestGames() {
    setOnlyTheBestGames(!onlyTheBestGames)
  } 


  useEffect(() => {
    axios
      .get("https://wild-games.jsrover.wilders.dev/games")
      .then((res) => res.data)
      .then((data) => {
        setGameList(data);
      });
  }, []);

  return (
  
    <div className="container">
    <button
    onClick={handleOnlyTheBestGames}>Only games rating over 4.5:{" "}
    {onlyTheBestGames ? "ON" : "OFF"}
    </button>
   {gameList
   .filter((gameFilter) => !onlyTheBestGames || gameFilter.rating >= 4.5)
   .map((game) => (
       <div key={game.id}>
           <Game game={game} />
           </div>
   ))} 
</div>
  )};

export default GameList;
