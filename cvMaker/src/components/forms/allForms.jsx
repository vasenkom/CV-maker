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
    <form id="personalForm">
      <label htmlFor="name">Name:</label>
      <PersonalForm
        name="name"
        value={personalInfo.name}
        onChange={handleInputChange}
      />
    </form>
  );
}
