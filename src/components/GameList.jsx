import { useState, useEffect } from "react";

function GameList({ game, rating, image }) {
  const [game, setGame] = useState("");

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(
        "https://wild-games.jsrover.wilders.dev/games"
      );
      const gameData = await response.json();
      setGame(gameData);
    };
    fetchGame();
  }, []);

  return (
    <ul>
      {game.map((games) => (
        <li key={games.id}>
          <li>{games.slug}</li>
        </li>
      ))}
    </ul>
  );
}

export default GameList;
