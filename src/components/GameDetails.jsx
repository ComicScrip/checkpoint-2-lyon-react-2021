import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function GameDetails() {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        setGameDetails(true);
        const res = await axios.get(
          `https://wild-games.jsrover.wilders.dev/games/${id}`
        );
        const data = res.data;
        console.log(data);
        setGameDetails(data);
      } catch (err) {
        console.log(err.response.status);
        if (err.response.status === 404) {
          window.location.href = "/error";
        }
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, [id]);

  if (loading) {
    return (
      <div>
        <span className="text-red">LOADING</span>
      </div>
    );
  }

  return (
    <div>
      <div className="border-black">
        <div>
          <h2>{gameDetails.name}</h2>
          <img src={gameDetails.background_image} alt="gamePic" />
          <h3>Release date: {gameDetails.released}</h3>
          <h3>Rating: {gameDetails.rating}/5</h3>
          <video controls width="40%">
            <source src={gameDetails.clip.clip} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
