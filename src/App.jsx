import { useState } from "react";



function App() {
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>hello</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />    </div>
  );
}

export default App

function MyButton({ count, onClick }) {
  // Receives shared state and handler from App
  return <button onClick={onClick}>clicked {count} times</button>;
}