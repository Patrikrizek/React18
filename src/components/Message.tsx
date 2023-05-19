// let count = 0;
// This is an impure approach.

function Message() {
  // This is a pure approach.
  // Keep components pure >> They will return the same value every time.
  let count = 0;
  count++;
  return <div>Message {count}</div>;
}

export default Message;
