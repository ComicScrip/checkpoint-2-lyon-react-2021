import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState();

  const getGame = async () => {
    const res = await axios.get(
      `https://wild-games.jsrover.wilders.dev/games/${id}`
    );
    setGame(res.data);
  };

  useEffect(() => {
    getGame();
  }, [id]);

  if (!game) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div>
      <ul>
        {game.short_screenshots.map((image) => {
          return (
            <>
              <img className="image-details" src={image.image} alt="" />
            </>
          );
        })}
      </ul>
      <ul>
        {game.genres.map((genre) => {
          return (
            <>
              <h3>{genre.name}</h3>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default GameDetails;
