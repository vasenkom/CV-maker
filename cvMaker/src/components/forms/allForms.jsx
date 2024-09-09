import { useState } from "react";
import { PersonalForm } from "./personalForm";

export function Forms({ personalInfo, handleInputChange }) {
  function formAppers() {}
  return (
    <>
      <div id="form">
        <p className="personal-info-label">Personal info:</p>
        <form id="personalForm">
          <label htmlFor="name">Name:</label>
          <PersonalForm
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email:</label>
          <PersonalForm
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone number:</label>
          <PersonalForm
            name="phone"
            value={personalInfo.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="address">Address:</label>
          <PersonalForm
            name="address"
            value={personalInfo.address}
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div id="form">
        <p className="personal-info-label">Education:</p>
        <button id="formAppersButton" onClick={formAppers}>
          +
        </button>
      </div>
    </>
  );
}
