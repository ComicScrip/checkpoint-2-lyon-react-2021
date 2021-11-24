import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../App.css";
import { Link } from "react-router-dom";

const GameDetails = () => {
  // ------------     APPEL API
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => setGameDetails(res.data));
  }, [id]);
  if (!gameDetails) return null;

  return (
    <div>
      <div className="flex items-center justify-center m-20 border-2 shadow-lg rounded-xl p-8">
        <div className="px-10">
          <h4 key={gameDetails.id} className="text-2xl pb-4">
            {gameDetails.name}
          </h4>
          <p className="italic pl-3 pb-4"> Rating : {gameDetails.rating}</p>
          <p className="italic pl-3 pb-4">
            released Date : {gameDetails.released}
          </p>

          <p className="italic pl-3 pb-4">
            Genre : {gameDetails.genres[0].name}, {gameDetails.genres[1].name}{" "}
          </p>
        </div>
        <img
          src={gameDetails.background_image}
          alt={gameDetails.name}
          className="w-96"
        />
      </div>
      <Link to="/">
        <button className="border-2 bg-blue-900 text-gray-200 pl-4  px-4 rounded-xl">
          back Home
        </button>
      </Link>
    </div>
  );
};

export default GameDetails;
