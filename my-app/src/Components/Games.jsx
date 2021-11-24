import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const Games = () => {
  const { id } = useParams();
  const [Games, setGames] = useState(null);

  useEffect(() => {
    axios.get(`wild-games.jsrover.wilders.dev/${id}`).then((res) => {
      setGames(res.data);
    });
  }, [id]);

  if (!Games) {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  }
  return <div>Games</div>;
};

export default Games;
