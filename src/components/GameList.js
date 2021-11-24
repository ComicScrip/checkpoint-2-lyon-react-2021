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
      <button
        type="button"
        id="button"
        onClick={HandleClick}
        className="text-center m-3 border-4 border-black p-5 "
      >
        Filter rating sup4.5
      </button>
      <ul>
        {gameList
          .filter((game) => !ratingGame || game.rating >= 4.5)
          .map(({ id, name }) => (
            <li key={id} className="m-3 p-4 ">
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
