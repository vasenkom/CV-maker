import { useState } from "react";
import { Form } from "./form";

export function EducationForm({ educationInfo, handleInputChange }) {
  const [visibleForm, setVisibleForm] = useState(false);
  function formAppers() {
    setVisibleForm(!visibleForm);
    console.log("Education Add", visibleForm ? "is visible" : "is hidden");
  }
  return (
    <>
      <div id="form">
        <p className="personal-info-label">Education:</p>
        <>
          {!visibleForm ? (
            <button id="formAppersButton" onClick={formAppers}>
              +
            </button>
          ) : (
            <>
              <form id="personalForm">
                <label htmlFor="school">School:</label>
                <Form
                  name="school"
                  value={educationInfo.school}
                  onChange={handleInputChange}
                />
                <label htmlFor="degree">Degree:</label>
                <Form
                  name="degree"
                  value={educationInfo.degree}
                  onChange={handleInputChange}
                />
                <label htmlFor="startDate">Start Date:</label>
                <Form
                  name="startDate"
                  value={educationInfo.startDate}
                  onChange={handleInputChange}
                />
                <label htmlFor="endDate">End Date:</label>
                <Form
                  name="endDate"
                  value={educationInfo.endDate}
                  onChange={handleInputChange}
                />
                <label htmlFor="location">Location:</label>
                <Form
                  name="location"
                  value={educationInfo.location}
                  onChange={handleInputChange}
                />
              </form>
              <div id="buttonFormDiv">
                <button id="deleteFormButton">Delete</button>
                <button id="saveFormButton">Save</button>
              </div>
            </>
          )}
        </>
      </div>
    </>
  );
}
