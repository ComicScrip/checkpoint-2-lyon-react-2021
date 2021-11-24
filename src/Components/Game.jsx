import React from "react";

const Game = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.rating}</p>
      <img src={props.background_image} alt={props.name} />
    </div>
  );
};

export default Game;
