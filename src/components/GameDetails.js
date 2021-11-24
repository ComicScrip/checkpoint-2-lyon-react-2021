import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState();

  const getGame = async () => {
    const res = await axios.get(
      `https://wild-games.jsrover.wilders.dev/games/${id}`
    );
    setGame(res.data);
    console.log(game);
  };

  useEffect(() => {
    getGame();
  }, []);

  if (!game) {
    return <h1>Loading .. </h1>;
  }

  return (
    <div className="h-screen flex flex-col items-center">
      <img src={game.background_image} alt={game.name} />
      <h1 className="text-xl text-gray-100">{game.name}</h1>
      <div id="genre" className="mt-10 w-11/12 flex flex-col gap-4">
        <h1 className="text-white"> Genres </h1>
        <ul className="flex flex-wrap w-full gap-4">
          {game.genres.map((genre) => {
            return (
              <li key={genre.id}>
                <div className="flex flex-col items-center rounded-lg bg-green-800">
                  <img
                    src={genre.image_background}
                    alt={genre.name}
                    className="w-40 rounded-t-lg"
                  />
                  <h2 className="text-white">{genre.name} </h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default GameDetails;
