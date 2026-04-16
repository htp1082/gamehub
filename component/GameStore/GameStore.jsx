import React, { use } from "react";
import GameCard from "../GameCard/GameCard";

const gameStoreFech = fetch("game.json").then((res) => res.json());
const GameStore = () => {
  const gameStore = use(gameStoreFech);
  console.log(gameStore);

  const sortGame = gameStore.sort((a, b) => b.ratings - a.ratings);
  console.log(sortGame);
  const slicethreeGame = sortGame.slice(0, 3);
  console.log(slicethreeGame);
  return (
    <div>
        <h2 className="text-center font-bold text-3xl mt-5 mb-5">Popular Games</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {slicethreeGame.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn">All Apps</button>
      </div>
    </div>
  );
};

export default GameStore;
