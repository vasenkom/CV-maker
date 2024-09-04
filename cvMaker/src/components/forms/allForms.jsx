import { useState } from "react";
import { PersonalForm } from "./personalForm";

export function Forms() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div id="form">
      <p
        style={{
          marginTop: "10px",
          marginLeft: "15px",
          marginRight: "15px",
          fontSize: "17px",
          fontWeight: "600",
        }}
      >
        Personal info:
      </p>
      <form id="personalForm">
        <label htmlFor="name">Name:</label>
        <PersonalForm
          name="name"
          value={personalInfo.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <PersonalForm
          name="email"
          value={personalInfo.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone number:</label>
        <PersonalForm
          name="email"
          value={personalInfo.email}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Address:</label>
        <PersonalForm
          name="address"
          value={personalInfo.address}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
