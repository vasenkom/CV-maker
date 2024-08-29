import React, { useState } from "react";
import "./toggleSwitch.css";

export function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);
  const [stateMessage, setStateStatus] = useState("Example is shown");

  const toggleHandler = () => {
    setIsChecked(!isChecked);

    console.log(
      "Toggle switch",
      isChecked ? "Example is shown" : "Example is deleted"
    );

    setStateStatus(isChecked ? "Example is shown" : "Example is deleted");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={toggleHandler} />
        <span className="slider round"></span>
      </label>
      <p className="stateToggle">{stateMessage}</p>
    </div>
  );
}
