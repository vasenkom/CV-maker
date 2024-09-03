import { useState } from "react";

export function forms() {
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
}
