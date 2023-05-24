import React from "react";
import { useState } from "react";

const ExerciseUpdatingStateArrayOfObjects = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      <h3>Exercise - Updating State Array Of Objects</h3>
      <p>{cart.items[0].title + " - quantity: " + cart.items[0].quantity}</p>
      <button onClick={handleClick}>Add one</button>
    </div>
  );
};

export default ExerciseUpdatingStateArrayOfObjects;
