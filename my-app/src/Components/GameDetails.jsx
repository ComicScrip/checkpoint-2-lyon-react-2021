import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function GameDetails({ name, rating, released }) {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => {
        setGameDetails(res.data);
      });
  }, [id]);

  if (!gameDetails) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="quoteGame">
      <h1>{gameDetails.name}</h1>
      <h2> {gameDetails.rating}</h2>
      <p>{gameDetails.released} </p>
      <img src={gameDetails.background_image} alt="img-of-the-game" />
    </div>
  );
}

export default GameDetails;
