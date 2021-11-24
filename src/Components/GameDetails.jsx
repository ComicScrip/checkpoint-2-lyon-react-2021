import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const GameDetails = () => {
  // ------------     APPEL API
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => setGameDetails(res.data));
  }, [id]);
  if (!gameDetails) return null;

  return (
    <div>
      <h4 key={gameDetails.id}> {gameDetails.name}</h4>
      <p> Rating : {gameDetails.rating}</p>
      <p> released Date : {gameDetails.released}</p>
    </div>
  );
};

export default GameDetails;
