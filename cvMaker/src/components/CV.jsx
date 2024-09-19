export function CVprototype({
  personalInfo,
  educationList,
  saveFormData,
  currentEducation,
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
          <h3 className="header-text">Education</h3>

          {/* Show both saved education and current form data if saveFormData is true */}
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
      </div>
    </>
  );
}
