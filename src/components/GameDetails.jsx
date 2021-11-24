import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/gameDetails.css";

const GameDetails = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => setGameDetails(res.data));
  }, [id]);

  if (!gameDetails) return <p>LOADING</p>;
  return (
    <div className="container">
      <h2>{gameDetails.name}</h2>
      <span>Rating: {gameDetails.rating} ⭐</span>
      <p>Released: {gameDetails.released}</p>
      <div className="flex-container">
        {gameDetails.short_screenshots
          .map((elem) => elem.image)
          .map((image) => (
            <img src={image} className="screenshot" />
          ))}
      </div>
    </div>
  );
};

export default GameDetails;
