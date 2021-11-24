import { useState, useEffect } from "react";
import axios from "axios";
import Game from "../components/Game";

function GameList() {
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
    <div className="space-y-6">
      <ul>
        {game
          .filter((game) => (filter ? game.rating >= 4.5 : true))
          .map((game) => {
            return (
              <li key={game.id}>
                <Game
                  name={game.name}
                  background={game.background_image}
                  movies={game.clip.clip}
                  released={`Released From${game.released}`}
                  id={game.id}
                />
              </li>
            );
          })}
      <button type="button" onClick={() => setFilter(!filter)}>
        {filter ? "Show Movies" : "Show only filtered "}
      </button>
      </ul>
    </div>
  );
}

export default GameList;
