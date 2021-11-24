import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Embed } from 'semantic-ui-react'

const Game = ({ background, movies, name, released, id }) => {
  const [rempoveGame, setremoveGame] = useState(false);

  return (
    <div
      className={`${
        rempoveGame
          ? "hidden"
          : "flex justify-center items-center px-10 bg-gray-500 text-white font-extrabold text-2xl"
      }`}
    >
      <div className="flex flex-col items-center justify-center pb-20">
        <Link to={`/games/${id}`}>{name}</Link>

        <img
          className="w-1/2 rounded-lg mt-9"
          src={background}
          alt={background}
        />
        <div className="movie mt-9">
        {/* <video id="background-video" loop autoPlay>
                <source src={movies} type="video/mp4" />
  
            </video>
        </div> */}
        <Embed
    id='125292332'
    placeholder='/images/vimeo-example.jpg'
    source={movies}
  />
        <div className="released pb-8">
          <h3>{released}</h3>
        </div>
        <button
          className="text-red-500 border-solid rounded-2xl border-black font-bold"
          type="button"
          onClick={() => setremoveGame(!rempoveGame)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Game;
