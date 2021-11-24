import { useState, useEffect } from "react";
import axios from "axios";
import Game from "../components/Game";

function GameList({ games, rating, image }) {
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
          ? game.map((game) => {
              return (
                <li key={game.id}>
                  <Game name={game.name} id={game.id} />
                </li>
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
        {" "}
        {filter ? "Show Movies" : "Show only filtered "}
      </button>
    </div>
  );
}

export default GameList;
