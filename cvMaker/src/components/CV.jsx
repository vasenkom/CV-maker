export function CVprototype({ personalInfo }) {
  return (
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
    </div>
  );
}
