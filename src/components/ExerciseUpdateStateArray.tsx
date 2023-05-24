import React from "react";
import { useState } from "react";

const ExerciseUpdateStateArray = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <div>
      <h3>Exercise - Update State Array</h3>
      <p>{"Pizza: " + pizza.name}</p>
      <p>{"Pizza topping(s): " + pizza.toppings}</p>
      <button onClick={handleClick}>Add toping to the pizza</button>
    </div>
  );
};

export default ExerciseUpdateStateArray;
