import React from "react";

const Display = ({ beatName, on }) => {
  return (
    <div className={on ? "display-loop" : "display-loop-off"}>
      <div id="display">{beatName}</div>
    </div>
  );
};

export default Display;
