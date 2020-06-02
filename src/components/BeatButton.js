import React, { useEffect, useState, useRef } from "react";

const BeatButton = ({ beat, keyBinding, name, setBeatName }) => {
  const audioRef = useRef();
  const [shadow, setShadow] = useState(null);
  const [style, setStyle] = useState(null);
  const [toogle, setToogle] = useState(false);
  const handleClick = () => {
    if (!toogle) {
      setBeatName(name);
      audioRef.current.play();
      setShadow("1px 1px 1px black inset");
      setStyle({ backgroundColor: "rgb(176, 160, 230)" });
      setToogle((prevState) => {
        return !prevState;
      });
    } else {
      setShadow(null);
      setBeatName("");

      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setStyle(null);
      setToogle((prevState) => {
        return !prevState;
      });
    }
  };
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
    };
    const onUp = (event) => {
      if (event.key === keyBinding || event.key === keyBinding.toUpperCase()) {
        const playPromise = audioRef.current.play();
        handleStop(playPromise);
      }
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
        onClick={handleClick}
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
