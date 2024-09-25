import React, { useState } from "react";
import "./toggleSwitch.css";

export function ToggleSwitch({ isChecked, stateMessage, toggleHandler }) {
  return (
    <div className="toggleDIV">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={toggleHandler} />
        <span className="slider round"></span>
      </label>
      <p className="stateToggle">{stateMessage}</p>
    </div>
  );
}
