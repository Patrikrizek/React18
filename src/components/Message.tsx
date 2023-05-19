let count = 0;

function Message() {
  console.log("Message called", count);
  count++;
  return <div>Message {count}</div>;
}

export default Message;
