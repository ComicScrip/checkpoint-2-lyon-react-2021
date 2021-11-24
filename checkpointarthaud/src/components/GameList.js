import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Game from "./Game";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const [onlyTheBestGames, setOnlyTheBestGames] = useState(false);
  function handleOnlyTheBestGame (){
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
  
  <>
    <button
          onclick={handleOnlyTheBestGame}>Games whose rating is above 4.5 :{''}
          {onlyTheBestGames ? "ON" : "OFF"}
      </button>
      <div className='container'>
              {gameList
                  .map((game) => (
                      <div key={game.id}>
                          <Game game={game} />
                      </div>
                  ))}
          </div></>
  )};

export default GameList;
