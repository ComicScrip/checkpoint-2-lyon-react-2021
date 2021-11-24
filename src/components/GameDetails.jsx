import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const GameDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((res) => {
        setDetails(res.data);
      });
  }, [id]);

  if (!details) {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  } else
    return (
      <div>
        {" "}
        <h2>{details.name}</h2>
        <p>Release date : {details.released}</p>
        <p>Rating: {details.rating} </p>
      </div>
    );
};

export default GameDetails;

// no remaining time. See why /games/undefined
