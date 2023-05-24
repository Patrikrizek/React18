import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import StateIntro from "./components/StateIntro";
import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Message from "./components/Message";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExerciseUpdatingStateObject from "./components/ExerciseUpdatingStateObject";
import ExerciseUpdateStateArray from "./components/ExerciseUpdateStateArray";
import ExerciseUpdatingStateArrayOfObjects from "./components/ExerciseUpdatingStateArrayOfObjects";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = () => {
    console.log("clicked");
  };

  const [cardItems, setCardItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click me!</Button>
      <BsFillCalendarFill color="green" size="40" />
      <Like onClick={() => console.log("clicked")} />
      <StateIntro />

      <NavBar cardItemsCount={cardItems.length} />
      <Cart cartItems={cardItems} onClear={() => setCardItems([])} />
      <ExerciseUpdatingStateObject />
      <ExerciseUpdateStateArray />
      <ExerciseUpdatingStateArrayOfObjects />
    </div>
  );
}

export default App;
