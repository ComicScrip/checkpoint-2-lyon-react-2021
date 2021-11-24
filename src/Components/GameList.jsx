import React, { useState } from "react";
import Game from "./Game";
import useSwr from "swr";
import { Link } from "react-router-dom";
import "../App.css";

const GameList = () => {
  const [deleteBtn, setDeleteBtn] = useState(true);
  const [selected, setSelected] = useState(false);

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

  // ------------     DELETE BTN
  const handleToggle = () => {
    setDeleteBtn(!deleteBtn);
  };

  return (
    <div>
      <button
        onClick={showBestGames}
        className="ml-20 border-2 p-2 rounded-xl bg-blue-200"
      >
        {bestGames ? "Show All the Game" : "Show only the best > 4.5"}
      </button>
      <ul className="flex flex-col p-20">
        {games
          .filter((game) => !bestGames || game.rating > 4.5)

          .map((game) => {
            return (
              <li>
                <div className="m-1 border-2 rounded-xl p-10 shadow-sm">
                  <div className=" flex items-center justify-around ">
                    <div className="flex flex-col">
                      <div>
                        <Game
                          key={game.id}
                          name={game.name}
                          rating={game.rating}
                          onClick={() => setSelected(game.id)}
                        />
                      </div>
                      <img
                        src={game.background_image}
                        alt={game.name}
                        className="w-96"
                      />
                    </div>
                  </div>
                  <Link to={`/${game.id}`}>
                    <button className="border-2 bg-blue-900 text-gray-200 pl-4  px-4 rounded-xl flex items-center justify-center">
                      More information
                    </button>
                  </Link>
                  <div className={deleteBtn ? null : "delete"}></div>
                  {selected === game.id ? null : (
                    <button
                      className="border-2 text-gray-200 pl-4  px-4 rounded-xl flex items-center justify-center"
                      onClick={handleToggle}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default GameList;
