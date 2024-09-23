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
}) {
  return (
    <>
      <div id="form">
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
              <label htmlFor="companyName">Company name:</label>
              <Form
                name="companyName"
                value={currentJobInput.companyName || ""}
                onChange={handleJobInputChange}
              />
              <label htmlFor="positionTitle">Position title:</label>
              <Form
                name="positionTitle"
                value={currentJobInput.positionTitle || ""}
                onChange={handleJobInputChange}
              />

              <div className="dateFormMain">
                <div className="dateForm">
                  <label htmlFor="startDateJob">Start Date:</label>
                  <Form
                    name="startDateJob"
                    value={currentJobInput.startDateJob || ""}
                    onChange={handleJobInputChange}
                  />
                </div>
                <div className="dateForm">
                  <label htmlFor="endDateJob">End Date:</label>
                  <Form
                    name="endDateJob"
                    value={currentJobInput.endDateJob || ""}
                    onChange={handleJobInputChange}
                  />
                </div>
              </div>

              <label htmlFor="locationJob">Location:</label>
              <Form
                name="locationJob"
                value={currentJobInput.locationJob || ""}
                onChange={handleJobInputChange}
              />

              <label htmlFor="descriptionJob">Description:</label>
              <Form
                name="descriptionJob"
                value={currentJobInput.descriptionJob || ""}
                onChange={handleJobInputChange}
              />
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
