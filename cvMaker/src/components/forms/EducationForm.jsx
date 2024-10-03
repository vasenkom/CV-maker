import { Form } from "./form";

export function EducationForm({
  educationList,
  handleInputChange,
  currentEducation,
  saveEducationInfo,
  visibleForm,
  makeFormAppear,
  handleEdit,
  deleteEducationInfo,
  saveFormData,
  cancelEducationInfo,
  customizeMode,
}) {
  function renderForm(labelText, name, value) {
    <div>
      <label htmlFor={name}>{labelText}:</label>
      <Form name={name} value={value || ""} onChange={handleInputChange} />
    </div>;
  }

  return (
    <>
      <div id="form" style={{ display: customizeMode ? "none" : "block" }}>
        <p className="personal-info-label">Education:</p>

        {/* Render saved education list */}
        <div>
          {!visibleForm &&
            educationList.length > 0 &&
            educationList.map((school, index) => (
              <div key={index} id="savedEducationInfo">
                <p>School: {school.school}</p>
                <p>Degree: {school.degree}</p>
                <button
                  className="formButton2"
                  id="editButton"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="formButton2"
                  id="deleteButton"
                  onClick={() => deleteEducationInfo(index)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>

        {/* Render the form if it's visible */}
        {visibleForm ? (
          <>
            <form id="personalForm">
              {renderForm("School", "school", currentEducation.school)}
              {renderForm("Degree", "degree", currentEducation.degree)}

              <div className="dateFormMain">
                {renderForm(
                  "Start Date",
                  "startDate",
                  currentEducation.startDate
                )}
                {renderForm("End Date", "endDate", currentEducation.endDate)}
              </div>

              {renderForm("Location", "location", currentEducation.location)}
            </form>

            <div>
              <button
                className="formButton"
                id="saveFormButton"
                onClick={saveEducationInfo}
              >
                Save
              </button>

              <button
                className="formButton"
                id="cancelFormButton"
                onClick={cancelEducationInfo}
              >
                Cancel
              </button>
            </div>
          </>
        ) : null}

        {/* Add "+" button at the end */}
        {!visibleForm && (
          <button id="formAppersButton" onClick={makeFormAppear}>
            +
          </button>
        )}
      </div>
    </>
  );
}
