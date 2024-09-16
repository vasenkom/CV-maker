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
}) {
  return (
    <>
      <div id="form">
        <p className="personal-info-label">Education:</p>

        {!visibleForm ? (
          <button id="formAppersButton" onClick={makeFormAppear}>
            +
          </button>
        ) : (
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
              <label htmlFor="startDate">Start Date:</label>
              <Form
                name="startDate"
                value={currentEducation.startDate || ""}
                onChange={handleInputChange}
              />
              <label htmlFor="endDate">End Date:</label>
              <Form
                name="endDate"
                value={currentEducation.endDate || ""}
                onChange={handleInputChange}
              />
              <label htmlFor="location">Location:</label>
              <Form
                name="location"
                value={currentEducation.location || ""}
                onChange={handleInputChange}
              />
            </form>

            <button
              className="formButton"
              id="saveFormButton"
              onClick={saveEducationInfo}
            >
              Save
            </button>
          </>
        )}

        <div>
          {!saveFormData &&
            educationList.map((school, index) => (
              <div key={index} id="savedEducationInfo">
                <p>School: {school.school}</p>
                <p>Degree: {school.degree}</p>
                <button id="editButton" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button
                  id="deleteButton"
                  onClick={() => deleteEducationInfo(index)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
