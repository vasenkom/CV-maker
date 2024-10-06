import { Form } from "./form";

export function PersonalForms({
  personalInfo,
  handleInputChange,
  customizeMode,
}) {
  const formField = [
    {
      label: "Name",
      name: "name",
      value: personalInfo.name,
      id: "personalForm",
    },
    {
      label: "Email",
      name: "email",
      value: personalInfo.email,
      id: "personalForm",
    },
    {
      label: "Phone number",
      name: "phone",
      value: personalInfo.phone,
      id: "personalForm",
    },
    {
      label: "Address",
      name: "address",
      value: personalInfo.address,
      id: "personalForm",
    },
  ];

  return (
    <>
      <div id="form" style={{ display: customizeMode ? "none" : "block" }}>
        <p className="personal-info-label">Personal info:</p>
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
