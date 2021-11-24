import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GameList() {
  const [gameList, setGameList] = useState([]);
  const [gameFilter, setGameFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://wild-games.jsrover.wilders.dev/games"
        );
        const data = res.data;
        console.log(data);
        setGameList(data);
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
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-col my-4">
        <div
          className="
        animate-spin
        rounded-full
        h-20
        w-20
        border-t-2 border-b-2 border-red my-3
      "
        />
        <span className="text-red">LOADING</span>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {gameList.map((game) => {
          return (
            <Link to={`/${game.id}`}>
              {" "}
              <li key={game.id}>{game.name}</li>{" "}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default GameList;
