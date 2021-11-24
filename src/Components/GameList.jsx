import React, { useState } from "react";
import Game from "./Game";
import useSwr from "swr";

const GameList = () => {
  // ------------     APPEL API
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const wildGame = "https://wild-games.jsrover.wilders.dev/games";
  const { data, error } = useSwr(wildGame, { fetcher });
  const games = data && !error ? data.slice(0, 2000) : [];

  // ------------     FILTRE BEST GAMES

  const [bestGames, setBestGames] = useState("");
  const showBestGames = () => {
    setBestGames(!bestGames);
  };

  return (
    <div>
      <button onClick={showBestGames}>
        {bestGames ? "Show All the Game" : "Show only the best > 4.5"}
      </button>
      <ul>
        {games
          .filter((game) => !bestGames || game.rating > 4.5)

          .map((game) => {
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
