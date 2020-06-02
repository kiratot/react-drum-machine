import React, { useEffect, useState, useRef } from "react";

const BeatButton = ({ beat, keyBinding, name, setBeatName }) => {
  const audioRef = useRef();
  const [shadow, setShadow] = useState(null);
  const [style, setStyle] = useState(null);

  const handlePlay = () => {
    setBeatName(name);
    audioRef.current.play();
    setShadow("1px 1px 1px black inset");
    setStyle({ backgroundColor: "rgb(176, 160, 230)" });
  };
  const handleStop = (playPromise) => {
    setShadow(null);
    setBeatName("");
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setStyle(null);
  };
  useEffect(() => {
    const onDown = (event) => {
      if (event.key === keyBinding || event.key === keyBinding.toUpperCase()) {
        handlePlay();
      }
      console.log(`Key : "${event.key}" is DOWN`);
    };
    const onUp = (event) => {
      if (event.key === keyBinding || event.key === keyBinding.toUpperCase()) {
        const playPromise = audioRef.current.play();
        handleStop(playPromise);
      }
      console.log(`Key : "${event.key}" is UP`);
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [beat, keyBinding]);

  return (
    <div className={`drum-${keyBinding}`}>
      <button
        style={style}
        id={`loop-button-${keyBinding}`}
        className={`drum-pad button-drum-pad`}
        onMouseDown={handlePlay}
      >
        {keyBinding}
        <audio
          ref={audioRef}
          type="audio/wav"
          src={beat}
          className="clip"
          id={keyBinding.toUpperCase()}
        ></audio>
      </button>
    </div>
  );
};

export default BeatButton;
