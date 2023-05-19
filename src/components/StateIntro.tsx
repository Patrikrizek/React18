import React from "react";
import { useState } from "react";

const StateIntro = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <p>
        {firstName} {lastName}
        {fullName}
      </p>
    </div>
  );
};

export default StateIntro;
