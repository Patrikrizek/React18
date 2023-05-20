import React from "react";
import { useState } from "react";

const StateIntro = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs[0].title + bugs[0].fixed}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default StateIntro;
