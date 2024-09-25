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
              <label htmlFor="school">School:</label>
              <Form
                name="school"
                value={currentEducation.school || ""}
                onChange={handleInputChange}
              />
              <label htmlFor="degree">Degree:</label>
              <Form
                name="degree"
                value={currentEducation.degree || ""}
                onChange={handleInputChange}
              />

              <div className="dateFormMain">
                <div className="dateForm">
                  <label htmlFor="startDate">Start Date:</label>
                  <Form
                    name="startDate"
                    value={currentEducation.startDate || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="dateForm">
                  <label htmlFor="endDate">End Date:</label>
                  <Form
                    name="endDate"
                    value={currentEducation.endDate || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <label htmlFor="location">Location:</label>
              <Form
                name="location"
                value={currentEducation.location || ""}
                onChange={handleInputChange}
              />
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
