import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  function handleMouseOver() {
    setColor("black");
  }

  function handleMouseOut() {
    setColor("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
