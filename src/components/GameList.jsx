import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Game from "./Game";

function GameList() {
  const [gameList, setGameList] = useState([]);
  const [list, setList] = useState(false);
  const [loading, setLoading] = useState(true);

  const gameFilter = () => {
    setList(!list);
  };

  useEffect(() => {
    const getList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://wild-games.jsrover.wilders.dev/games"
        );
        const data = res.data;
        console.log(data);
        setGameList(data);
      } catch (err) {
        console.log(err.response.status);
        if (err.response.status === 404) {
          window.location.href = "/error";
        }
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, []);

  if (loading) {
    return (
      <div>
        <span className="text-red">LOADING</span>
      </div>
    );
  }

  return (
    <div>
      <button onClick={gameFilter}>Best Games Filter</button>
      <ul>
        {gameList
          .filter((game) => !list || game.rating >= 4.5)
          .map((game) => {
            return <Game key={game.id} game={game} />;
          })}
      </ul>
    </div>
  );
}

export default GameList;
