import React, { useEffect } from "react";

function ColaComponent({ keyTrigger, url, name, setDisplay }) {
  const playSound = () => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
    setDisplay(name);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toUpperCase() === keyTrigger) {
        playSound();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="drum-pad btn btn-dark w-100 py-3 fs-5 fw-bold"
      id={name}
      onClick={playSound}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url}></audio>
    </div>
  );
}

export default ColaComponent;
