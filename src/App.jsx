import React, { useState } from "react";
import ColaComponent from "./ColaComponent";

const drumPads = [
  { key: "Q", name: "Heater 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", name: "Heater 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", name: "Heater 3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", name: "Heater 4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", name: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", name: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", name: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", name: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", name: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
];

function App() {
  const [display, setDisplay] = useState("");

  return (
    <div id="drum-machine" className="container mt-5 border border-warning bg-secondary p-4 rounded text-white">
      <div className="row">
        {/* Drum Pads */}
        <div className="col-md-6 d-grid gap-2">
          <div className="row row-cols-3 g-2">
            {drumPads.map((pad) => (
              <div key={pad.key} className="col">
                <ColaComponent
                  keyTrigger={pad.key}
                  url={pad.url}
                  name={pad.name}
                  setDisplay={setDisplay}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-between">
          <div className="align-self-end fw-bold mb-3">FCC <i className="fab fa-free-code-camp"></i></div>

          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="powerSwitch">Power</label>
            <input className="form-check-input bg-primary" type="checkbox" id="powerSwitch" defaultChecked />
          </div>

          <div id="display" className="bg-dark text-center my-3 py-2 px-4 rounded">
            {display || "Display"}
          </div>

          <input type="range" className="form-range w-75 mb-3" />

          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="bankSwitch">Bank</label>
            <input className="form-check-input bg-primary" type="checkbox" id="bankSwitch" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
