import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GamesList = () => {
  const [gamesList, setGamesList] = useState([]);
  const [gameFilter, setGameFilter] = useState("");
  useEffect(() => {
    axios.get("wild-games.jsrover.wilders.dev/").then((res) => {
      setGamesList(res.data);
    });
  }, []);

  return (
    <div>
      <input
        placeholder="game filter"
        value={gameFilter}
        onChange={(e) => setGameFilter(e.target.value)}
      />
      <ul>
        {gamesList
          .filter((post) => post.title.includes(gameFilter))
          .map(({ title, id }) => (
            <li key={id}>
              <Link to={`/${id}`}>{title} </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GamesList;
