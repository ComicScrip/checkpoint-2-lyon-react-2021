import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";




const Game = ({game}) => {

    // deleteGame(e) {
    //     e.preventDefault();
    //     this.game.onDelete(this.props.game[i].id);
    // };
    return (
    <>
    {/* <button onClick={this.deleteGame.bind(this, i )}>Delete</button> */}
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
        <Link to={`/games/${game.id}`}>More details</Link>
    </div>
    
    </>
  );
};

export default Game;
