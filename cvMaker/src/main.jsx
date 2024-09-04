import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SettingPart } from "./components/settings/SettingsMain";
import { Forms } from "./components/forms/allForms";
import { CVprototype } from "./components/CV";
import "./index.css";

function Application() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div id="Application">
      <div id="Left">
        <SettingPart personalInfo={personalInfo} />
        <Forms
          personalInfo={personalInfo}
          handleInputChange={handleInputChange}
        />
      </div>
      <div id="Right">
        {" "}
        <CVprototype personalInfo={personalInfo} />{" "}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    <Application />{" "}
  </StrictMode>
);
