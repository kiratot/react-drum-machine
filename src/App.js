import React, { useState, useEffect } from "react";
import "./App.css";
import BeatButton from "./components/BeatButton";
import samples from "./SAMPLES/Samples";
import Display from "./components/Display";
import OnOffButton from "./components/OnOffButton";

function App() {
  const [beats, setBeats] = useState(samples);
  const [on, setOn] = useState(false);
  const [beatName, setBeatName] = useState("");
  const shadow = on
    ? { boxShadow: "0px 0px 20px 4px inset #b0a0e6" }
    : { boxShadow: "0px 0px 0px 4px inset #b0a0e6" };
  const handleClick = () => {
    setOn((prevState) => {
      return !on;
    });
  };

  useEffect(() => {
    if (!on) setBeatName("");
  }, [on]);

  return (
    <div className="App">
      <div id="drum-machine" className=" drum-grid-container" style={shadow}>
        <div className="display-container">
          <OnOffButton on={on} handleClick={handleClick} />
          <Display beatName={beatName} on={on} />
        </div>
        <div
          className="beats-container"
          style={on ? { display: "contents" } : { display: "none" }}
        >
          {on &&
            beats.map((beat, index) => (
              <BeatButton
                key={index}
                keyBinding={beat.keyBinding}
                beat={beat.audio}
                name={beat.name}
                setBeatName={setBeatName}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
