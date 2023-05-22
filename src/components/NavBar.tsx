import React from "react";

interface Props {
  cardItemsCount: number;
}

const NavBar = ({ cardItemsCount }: Props) => {
  return <div>In Basket: {cardItemsCount}</div>;
};

export default NavBar;
