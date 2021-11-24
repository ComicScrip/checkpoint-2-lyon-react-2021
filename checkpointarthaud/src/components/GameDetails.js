import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const GameDetails = () => {
  const { id } = useParams();
  const [gameDetail, setGameDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => {
        setGameDetail(res.data);
      });
  }, [id]);

  if (!gameDetail) {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  }

  return (
    <div>
      <img
        width="700"
        height="500"
        src={gameDetail.background_image}
        alt="game poster"
      />
      <h2>{gameDetail.name}</h2>
      <p>{gameDetail.released}</p>
      <p>{gameDetail.slug}</p>
    </div>
  );
};

export default GameDetails;
