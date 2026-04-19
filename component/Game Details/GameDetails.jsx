import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import Loading from "../../pages/Loading";
import Navbar from "../Navbar/Navbar";
import GameDetailsPage from "../../pages/Game Details page/GameDetailsPage";

const GameDetails = () => {
  const { id } = useParams();
  const gameData = useLoaderData();

  const [game, setGame] = useState(null);

  useEffect(() => {
    const foundgame = gameData.find((singleGame) => singleGame.id == id);
    setGame(foundgame);
  }, [gameData, id]);

  if (!game) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="grid md:grid-cols-2 gap-8  mt-10">
        {/* Left Side - Image */}
        <div>
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>

          <p className="text-gray-600 mb-4">{game.description}</p>

          <p className="text-lg font-semibold mb-2">
            ⭐ Rating:{" "}
            <span className="text-yellow-500">{game.ratings} / 5</span>
          </p>

          <p className="text-lg font-semibold mb-4">
            🏢 Company: <span className="text-primary">{game.company}</span>
          </p>

          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
