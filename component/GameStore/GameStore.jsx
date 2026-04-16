import React, { use } from "react";
import GameCard from "../GameCard/GameCard";

const gameStoreFech = fetch("game.json").then((res) => res.json());
const GameStore = () => {
  const gameStore = use(gameStoreFech);
  console.log(gameStore);
  return (
    <div>
      {gameStore.map((game) => (
        <GameCard game={game}></GameCard>
      ))}
    </div>
  );
};

export default GameStore;
