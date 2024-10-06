import { Form } from "./form";

export function JobForm({
  currentJobInput,
  jobList,
  handleJobInputChange,
  visibleJobForm,
  makeJobFormAppear,
  saveJobInfo,
  handleJobEdit,
  deleteJobInfo,
  saveJobFormData,
  cancelJobInfo,
  customizeMode,
}) {
  function renderForm(labelText, name, value) {
    return (
      <div id="personalForm">
        <label htmlFor={name}>{labelText}:</label>
        <Form name={name} value={value || ""} onChange={handleJobEdit} />
      </div>
    );
  }

  return (
    <>
      <div id="form" style={{ display: customizeMode ? "none" : "block" }}>
        <p className="personal-info-label">Job Experience:</p>

        {/* Render saved education list */}
        <div>
          {!visibleJobForm &&
            jobList.length > 0 &&
            jobList.map((job, index) => (
              <div key={index} id="savedEducationInfo">
                <p>Company name: {job.companyName}</p>
                <p>Position title: {job.positionTitle}</p>
                <button
                  className="formButton2"
                  id="editButton"
                  onClick={() => handleJobEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="formButton2"
                  id="deleteButton"
                  onClick={() => deleteJobInfo(index)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        {/* Render the form if it's visible */}
        {visibleJobForm ? (
          <>
            <form id="personalForm">
              {renderForm(
                "Company Name",
                "companyName",
                currentJobInput.companyName
              )}
              {renderForm(
                "Position Title",
                "positionTitle",
                currentJobInput.positionTitle
              )}

              <div className="dateFormMain">
                <div className="dateForm">
                  {renderForm(
                    "Start Date",
                    "startDateJob",
                    currentJobInput.startDateJob
                  )}
                </div>

                <div className="dateForm">
                  {renderForm(
                    "End Date",
                    "endDateJob",
                    currentJobInput.endDateJob
                  )}
                </div>
              </div>

              {renderForm(
                "Location",
                "locationJob",
                currentJobInput.locationJob
              )}

              {renderForm(
                "Job Description",
                "descriptionJob",
                currentJobInput.descriptionJob
              )}
            </form>

            <div>
              <button
                className="formButton"
                id="saveFormButton"
                onClick={saveJobInfo}
              >
                Save
              </button>

              <button
                className="formButton"
                id="cancelFormButton"
                onClick={cancelJobInfo}
              >
                Cancel
              </button>
            </div>
          </>
        ) : null}

        {/* Add "+" button at the end */}
        {!visibleJobForm && (
          <button id="formAppersButton" onClick={makeJobFormAppear}>
            +
          </button>
        )}
      </div>
    </>
  );
}
