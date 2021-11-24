// API : https://wild-games.jsrover.wilders.dev/games
// IF DOESN'T WORK, CHECKOUT THE MIRROR API : https://apis.wilders.dev/wild-games

import axios from "axios";
import React, { useState, useEffect } from "react";
import Game from "./Game";

const GameList = () => {
  const [gameList, setGameList] = useState(null);
  const [bestGame, setBestGame] = useState(false);

  const filterGames = () => {
    setBestGame(!bestGame);
    setGameList(gameList.filter((game) => game.rating > 4.5));
  };

  useEffect(() => {
    axios
      .get("https://wild-games.jsrover.wilders.dev/games")
      .then((res) => setGameList(res.data));
  }, []);

  if (!gameList) return <p>LOADING</p>;
  return (
    <div>
      <button onClick={filterGames}>
        Check out the best games of all the time
      </button>
      {gameList.map(({ name, released, rating }) => (
        <Game name={name} released={released} rating={rating} />
      ))}
    </div>
  );
};

export default GameList;

// When clicking again on filter button, the list should display all the games again. To correct
