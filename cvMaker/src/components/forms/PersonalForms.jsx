import { Form } from "./form";

export function PersonalForms({
  personalInfo,
  handleInputChange,
  customizeMode,
}) {
  const formField = [
    { label: "Name", name: "name", value: personalInfo.name },
    { label: "Email", name: "email", value: personalInfo.email },
    { label: "Phone number", name: "phone", value: personalInfo.phone },
    { label: "Address", name: "address", value: personalInfo.address },
  ];

  return (
    <>
      <div id="form" style={{ display: customizeMode ? "none" : "block" }}>
        <p className="personal-info-label">Personal info:</p>
        <form id="personalForm">
          {formField.map(({ label, name, value }, index) => (
            <div key={index}>
              <label htmlFor={name}>{label}:</label>
              <Form name={name} value={value} onChange={handleInputChange} />
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
