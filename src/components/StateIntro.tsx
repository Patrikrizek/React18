import React from "react";
import { useState } from "react";

const StateIntro = () => {
  // [false, true]
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    count++;
    // setName('Patrik');
    console.log(isVisible, count);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default StateIntro;
