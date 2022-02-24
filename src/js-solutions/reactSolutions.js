import React, { useState } from "react";
import ReactDOM from "react-dom";

const Toggle = () => {
  const [change, setChange] = useState(false);
  const text = change ? "ON" : "OFF";
  const handleClick = () => {
    setChange(!change);
  };

  return <button onClick={handleClick}>{text}</button>;
};

ReactDOM.render(<Toggle />, document.getElementById("root"));
