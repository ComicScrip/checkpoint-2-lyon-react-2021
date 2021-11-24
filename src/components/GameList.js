import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const [ratingGame, setRatingGame] = useState(false);

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

  function HandleClick() {
    setRatingGame(!ratingGame);
  }

  return (
    <div>
      <button type="submit" id="button" onClick={HandleClick}>
        Filter rating sup 4.5
      </button>
      <ul>
        {gameList
          .filter((game) => !ratingGame || game.rating >= 4.5)
          .map(({ id, name }) => (
            <li key={id}>
              <Link to={`/${id}`}> {name}</Link>
            </li>
          ))}
        ;
      </ul>
    </div>
  );
};

export default GameList;

// https://wild-games.jsrover.wilders.dev/games
