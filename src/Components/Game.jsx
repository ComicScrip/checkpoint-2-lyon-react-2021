import React from "react";

const Game = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.rating}</p>
    </div>
  );
};

export default Game;
