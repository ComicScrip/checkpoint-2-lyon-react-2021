import axios from 'axios';
import { useEffect, useState } from 'react';
import Game from '../components/Game';

export default function GameList() {
  const [gameList, setGameList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getGames = () =>
    axios
      .get('https://wild-games.jsrover.wilders.dev/games')
      .then((res) => res.data);

  const [bestGameFilterIsActive, setBestGameFilterIsActive] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        setGameList(await getGames());
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadGames();
  }, []);

  const toggleBestGamesFilter = () => {
    setBestGameFilterIsActive((isActive) => !isActive);
  };

  const removeGame = (id) => {
    setGameList((games) => games.filter((game) => game.id !== id));
  };

  if (isLoading) return <p>Loading games...</p>;
  if (isError) return <p>Something wrong happened, please try again later</p>;

  return (
    <>
      <div className="filter-btn-container">
        <button type="button" onClick={toggleBestGamesFilter}>
          {bestGameFilterIsActive ? 'Show all games' : 'Show best games'}
        </button>
      </div>

      <div className="game-list-container">
        {gameList
          .filter((game) => !bestGameFilterIsActive || game.rating > 4.5)
          .map((game) => (
            <Game key={game.id} removeGame={removeGame} game={game} />
          ))}
      </div>
    </>
  );
}
