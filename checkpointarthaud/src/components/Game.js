import React from "react";

const Game = ({game}) => {
  return (
    <>
    <div key={game.id}>
      <img
        width="700"
        height="500"
        src={game.background_image}
        alt="game poster"
      />
      <h3>{game.name}</h3>
      <p>{game.released}</p>
      <p>{game.slug}</p>
      <ul>
          {game.genres.map((genre) => (
            <li>{genre.name}</li>
          ))}
        </ul>
    </div>
    </>
  );
};

export default Game;
