import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Games = ({ id, name, rating, released }) => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => {
        setGames(res.data);
      });
  }, [id]);

  if (!games) {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  }

  return (
    <div>
      <h2>
        <Link to={`/games/${id}`}>{name}</Link>
      </h2>
      <p>
        rating:{rating} / released:{released}
      </p>
    </div>
  );
};

export default Games;
