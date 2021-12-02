import axios from 'axios';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Game from '../components/Game';

export default function GameList() {
  const getGames = () =>
    axios
      .get('https://wild-games.jsrover.wilders.dev/games')
      .then((res) => res.data);
  const {
    isLoading,
    isError,
    data: gameList,
  } = useQuery('games', getGames, { refetchOnWindowFocus: false });
  const client = useQueryClient();
  const removeGame = (id) => {
    client.setQueryData('games', (games) => games.filter((g) => g.id !== id));
  };

  const [bestGameFilterIsActive, setBestGameFilterIsActive] = useState(false);
  const toggleBestGamesFilter = () => {
    setBestGameFilterIsActive((isActive) => !isActive);
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
