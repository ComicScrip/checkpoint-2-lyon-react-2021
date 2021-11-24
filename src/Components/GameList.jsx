import React from "react";
import Game from "./Game";
import useSwr from "swr";

const GameList = () => {
  // ------------     APPEL API
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const wildGame = "https://wild-games.jsrover.wilders.dev/games";
  const { data, error } = useSwr(wildGame, { fetcher });
  const games = data && !error ? data.slice(0, 2000) : [];

  return (
    <div>
      <ul>
        {games.map((game) => {
          return (
            <li>
              <Game
                key={game.id}
                name={game.name}
                rating={game.rating}
                img={game.background_image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GameList;
