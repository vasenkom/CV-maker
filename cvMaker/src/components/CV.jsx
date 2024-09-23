export function CVprototype({
  personalInfo,
  educationList,
  saveFormData,
  currentEducation,
  jobList,
  saveJobFormData,
  currentJobInput,
}) {
  return (
    <>
      <div id="CVprototype">
        <div id="head">
          <h1 id="name" style={{ paddingTop: "25px", marginBottom: "10px" }}>
            {personalInfo.name}
          </h1>
          <div id="secondLine">
            <p id="email" className="secondLineText">
              {personalInfo.email}
            </p>
            <p id="phone" className="secondLineText">
              {personalInfo.phone}
            </p>
            <p id="address" className="secondLineText">
              {personalInfo.address}
            </p>
          </div>
        </div>

        <div id="education">
          {/* Show both saved education and current form data if saveFormData is true */}
          {saveFormData && (
            <>
              {/* Show the current education being edited */}
              <h3 className="header-text">Education</h3>
              <div className="education-entry">
                <div id="column">
                  <p>
                    {currentEducation.startDate} - {currentEducation.endDate}
                  </p>
                  <p>{currentEducation.location}</p>
                </div>
                <div id="column">
                  <p>{currentEducation.school}</p>
                  <p>{currentEducation.degree}</p>
                </div>
              </div>

              {/* Show all saved education entries except the one being edited */}

              {saveFormData &&
                educationList
                  .filter((edu) => !(edu.id === currentEducation.id))
                  .map((edu, index) => (
                    <div key={index} className="education-entry">
                      <h3 className="header-text">Education</h3>
                      <div id="column">
                        <p>
                          {edu.startDate} - {edu.endDate}
                        </p>
                        <p>{edu.location}</p>
                      </div>
                      <div id="column">
                        <p>{edu.school}</p>
                        <p>{edu.degree}</p>
                      </div>
                    </div>
                  ))}
            </>
          )}

          {/* Show saved education entries if not editing */}
          {!saveFormData &&
            educationList.map((edu, index) => (
              <div key={index} className="education-entry">
                <h3 className="header-text">Education</h3>
                <div id="column">
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p>{edu.location}</p>
                </div>
                <div id="column">
                  <p>{edu.school}</p>
                  <p>{edu.degree}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Job experience part */}
        <div id="jobExperience">
          {/* Show both saved education and current form data if saveFormData is true */}
          {saveJobFormData && (
            <>
              {/* Show the current education being edited */}
              <h3 className="header-text">Job experience</h3>
              <div className="education-entry">
                <div id="column">
                  <p>
                    {currentJobInput.startDateJob} -{" "}
                    {currentJobInput.endDateJob}
                  </p>
                  <p>{currentJobInput.locationJob}</p>
                </div>
                <div id="column">
                  <p>{currentJobInput.companyName}</p>
                  <p>{currentJobInput.positionTitle}</p>
                  <p>{currentJobInput.descriptionJob}</p>
                </div>
              </div>

              {/* Show all saved education entries except the one being edited */}

              {saveJobFormData &&
                jobList
                  .filter((job) => !(job.id === currentJobInput.idJob))
                  .map((job, index) => (
                    <div key={index} className="education-entry">
                      <h3 className="header-text">Education</h3>
                      <div id="column">
                        <p>
                          {job.startDateJob} - {job.endDateJob}
                        </p>
                        <p>{job.locationJob}</p>
                      </div>
                      <div id="column">
                        <p>{job.companyName}</p>
                        <p>{job.positionTitle}</p>
                        <p>{job.descriptionJob}</p>
                      </div>
                    </div>
                  ))}
            </>
          )}

          {/* Show saved education entries if not editing */}
          {!saveJobFormData &&
            jobList.map((job, index) => (
              <div key={index} className="education-entry">
                <h3 className="header-text">Job Experience</h3>
                <div id="column">
                  <p>
                    {job.startDateJob} - {job.endDateJob}
                  </p>
                  <p>{job.locationJob}</p>
                </div>
                <div id="column">
                  <p>{job.companyName}</p>
                  <p>{job.positionTitle}</p>
                  <p>{job.descriptionJob}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
