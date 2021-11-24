import { useState, useEffect } from "react";
import axios from "axios";
import Game from "../components/Game";

function GameList({ games, background, image }) {
  const [game, setGame] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://wild-games.jsrover.wilders.dev/games"
      );
      setGame(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {!filter
          ? game.map((items) => {
              return (
                <ul>
                <li key={items.id}>
                  <Game name={items.name} id={items.id} />
                </li>
                <li>
                <li key={items.id}>
                  <Game background={items.background_image}id={items.id} />
                </li>
                </li>
                </ul>
              );
            })
          : game
              .filter((game) => game.rating >= 4.5)
              .map((game) => {
                return (
                  <li key={game.id}>
                    <Game name={game.name} id={game.id} />
                  </li>
                );
              })}
      </ul>
      <button type="button" onClick={() => setFilter(!filter)}>
        {filter ? "Show Movies" : "Show only filtered "}
      </button>
    </div>
  );
}

export default GameList;
