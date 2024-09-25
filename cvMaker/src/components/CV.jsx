export function CVprototype({
  personalInfo,
  educationList,
  saveFormData,
  currentEducation,
  jobList,
  saveJobFormData,
  currentJobInput,
  headColor,
  headFontColor,
  cvFont,
}) {
  return (
    <>
      <div id="CVprototype" style={{ fontFamily: cvFont }}>
        <div id="head" style={{ background: headColor, color: headFontColor }}>
          <h1
            id="name"
            style={{
              paddingTop: "25px",
              marginBottom: "10px",
              color: headFontColor,
            }}
          >
            {personalInfo.name}
          </h1>
          <div id="secondLine">
            <p
              id="email"
              className="secondLineText"
              style={{ color: headFontColor }}
            >
              {personalInfo.email}
            </p>
            <p
              id="phone"
              className="secondLineText"
              style={{ color: headFontColor }}
            >
              {personalInfo.phone}
            </p>
            <p
              id="address"
              className="secondLineText"
              style={{ color: headFontColor }}
            >
              {personalInfo.address}
            </p>
          </div>
        </div>

        <div id="education">
          {/* Show both saved education and current form data if saveFormData is true */}
          <h3 className="header-text">Education</h3>
          {saveFormData && (
            <>
              {/* Show the current education being edited */}

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
          <h3 className="header-text">Job experience</h3>
          {/* Show both saved education and current form data if saveFormData is true */}
          {saveJobFormData && (
            <>
              {/* Show the current education being edited */}
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
