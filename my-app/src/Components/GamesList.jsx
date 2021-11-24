import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GamesList = () => {
  const [gamesList, setGamesList] = useState([]);
  const [gameFilter, setGameFilter] = useState("");
  useEffect(() => {
    axios.get("https://wild-games.jsrover.wilders.dev/games").then((res) => {
      setGamesList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {gamesList.map((game) => {
          return (
            <Link to={`/${game.id}`}>
              <li key={game.id}>{game.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default GamesList;
