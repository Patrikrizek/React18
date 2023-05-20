import React from "react";
import { useState } from "react";

const StateIntro = () => {
  const [customer, setCustomer] = useState({
    name: "Patrik",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default StateIntro;
