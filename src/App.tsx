import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = () => {
    console.log("clicked");
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onClick={() => console.log("Clicked")}>Click me!</Button>
    </div>
  );
}

export default App;
