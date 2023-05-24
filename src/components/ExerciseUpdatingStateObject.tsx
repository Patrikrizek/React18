import React from "react";
import { useState } from "react";

const ExerciseUpdatingStateObject = ({}) => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "Patrik" },
    });
  };

  return (
    <div>
      <h3>Exercise - Updating State</h3>
      <p>{"Player: " + game.player.name}</p>
      <button onClick={handleClick}>Change Player</button>
    </div>
  );
};

export default ExerciseUpdatingStateObject;
