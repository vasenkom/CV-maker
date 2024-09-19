import React, { useState } from "react";
import "./toggleSwitch.css";

export function ToggleSwitch({ isChecked, stateMessage, toggleHandler }) {
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
