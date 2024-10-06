import { Form } from "./form";

export function SkillsForm({ skills, handleInputChange, customizeMode }) {
  const formField = [
    {
      label: "Languages",
      name: "languages",
      value: skills.languages,
      id: "personalForm",
    },
    {
      label: "Technical Skills",
      name: "technicalSkills",
      value: skills.technicalSkills,
      id: "personalForm",
    },
  ];

  return (
    <>
      <div id="form" style={{ display: customizeMode ? "none" : "block" }}>
        <p className="personal-info-label">Skills:</p>
        <form id="personalForm">
          {formField.map(({ label, name, value, id }, index) => (
            <div key={index} id={id}>
              <label htmlFor={name}>{label}:</label>
              <Form name={name} value={value} onChange={handleInputChange} />
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
