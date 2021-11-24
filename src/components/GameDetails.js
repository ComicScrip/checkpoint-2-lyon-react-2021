import React from "react";
import Game from "./Game";

const GameDetails = ({ id, name, rating, background_image }) => {
  return (
    <div>
      <Game key={id} name={name} img={background_image} />
    </div>
  );
};

export default GameDetails;
