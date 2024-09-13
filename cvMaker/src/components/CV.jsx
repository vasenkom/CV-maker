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
          <h1 id="name" style={{ paddingTop: "15px", marginBottom: "10px" }}>
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
          <h2>Education</h2>

          {/* Show both saved education and current form data when saveFormData is true */}
          {saveFormData && (
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
          )}

          {/* Always render the saved educationList */}
          {educationList.map((edu, index) => (
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
