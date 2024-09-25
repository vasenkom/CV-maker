import { Form } from "./form";

export function PersonalForms({
  personalInfo,
  handleInputChange,
  customizeMode,
}) {
  return (
    <>
      <div id="form" style={{ display: customizeMode ? "none" : "block" }}>
        <p className="personal-info-label">Personal info:</p>
        <form id="personalForm">
          <label htmlFor="name">Name:</label>
          <Form
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email:</label>
          <Form
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone number:</label>
          <Form
            name="phone"
            value={personalInfo.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="address">Address:</label>
          <Form
            name="address"
            value={personalInfo.address}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}
