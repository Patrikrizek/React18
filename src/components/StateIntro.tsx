import React from "react";
import { useState } from "react";

const StateIntro = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => ("happy" ? "happiness" : tag)));
  };

  return (
    <div>
      {tags}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default StateIntro;
