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
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo autem
        iste dolorem eveniet. Distinctio iusto, ullam dolorum commodi nihil
        assumenda debitis at nulla doloremque, sint molestias velit, nobis earum
        minima sunt! Incidunt delectus, excepturi amet adipisci nesciunt veniam
        cupiditate laboriosam, quaerat dignissimos accusantium vitae a ipsam,
        obcaecati voluptate ab facilis illo quas tempora culpa numquam. Deserunt
        tempore placeat totam. Voluptatum voluptatibus minus praesentium eum
        nesciunt et inventore fugit eos corrupti! Deleniti, inventore officiis
        illum incidunt provident fuga aut totam neque sequi libero? Nemo esse
        dolore autem qui libero ea repudiandae? Necessitatibus molestias facere
        autem possimus harum, cumque dolorum asperiores enim.
      </ExpandableText>
    </div>
  );
}

export default App;
