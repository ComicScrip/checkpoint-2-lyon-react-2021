import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Game from "./Game";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const [onlyTheBestGame, setOnlyTheBestGame] = useState(false);
  function handleOnlyTheBestGame (){
    setOnlyTheBestGame(!onlyTheBestGame)
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
  
  <div className='container'>
      {gameList
      .map((game) => (
          <div key={game.id}>
              <Game game={game} />
      </div>
      ))}
  </div>
  )};

export default GameList;
