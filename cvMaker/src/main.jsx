import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SettingPart } from "./components/settings/SettingsMain";
import { PersonalForms } from "./components/forms/PersonalForms";
import { EducationForm } from "./components/forms/EducationForm";
import { CVprototype } from "./components/CV";
import { SettingsButtons } from "./components/settings/Buttons";
import { handleDownloadPDF } from "./components/downloadPDF";
import downloadIcon from "./icons/download_icon.png";

import "./index.css";

function Application() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    id: crypto.randomUUID(),
  });

  const [educationList, setEducationList] = useState([]); // Array of education objects
  const [currentEducation, setCurrentEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: crypto.randomUUID(),
  });

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEducationInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [visibleForm, setVisibleForm] = useState(false); // Control form visibility

  function makeFormAppear() {
    setVisibleForm(true);
    setSaveFormData(true);
  }

  const [saveFormData, setSaveFormData] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  function saveEducationInfo() {
    setSaveFormData(false);

    if (editingIndex !== null) {
      // If in edit mode, update the existing education entry
      setEducationList((prevList) => {
        const updatedList = [...prevList];
        updatedList[editingIndex] = currentEducation; // Update the item at editingIndex
        return updatedList;
      });
      setEditingIndex(null); // Exit edit mode
    } else {
      // If not editing, add a new education entry with a unique id
      setEducationList((prevList) => [
        ...prevList,
        { ...currentEducation, id: crypto.randomUUID() }, // Assign a new unique id
      ]);
    }

    // Reset currentEducation after saving, with a new unique id
    setCurrentEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      id: crypto.randomUUID(), // Ensure a new id is generated for the next entry
    });

    // Hide form after saving
    setVisibleForm(false);
  }

  function deleteEducationInfo(index) {
    setEducationList((prevList) => prevList.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setCurrentEducation(educationList[index]);
    setEditingIndex(index); // Set the current index being edited
    setVisibleForm(true); // Show the form to edit
    setSaveFormData(true);
  }

  return (
    <div id="Application">
      <div id="Left">
        <SettingPart personalInfo={personalInfo} />
        <PersonalForms
          personalInfo={personalInfo}
          handleInputChange={handlePersonalInputChange}
        />
        <EducationForm
          currentEducation={currentEducation}
          educationList={educationList}
          handleInputChange={handleEducationInputChange}
          visibleForm={visibleForm}
          makeFormAppear={makeFormAppear}
          saveEducationInfo={saveEducationInfo}
          handleEdit={handleEdit}
          deleteEducationInfo={deleteEducationInfo}
          saveFormData={saveFormData}
        />
      </div>
      <div id="Right">
        <SettingsButtons
          id="downloadButton"
          text="Download"
          className="ContentButton downloadButton"
          image={
            <img src={downloadIcon} className="icons" alt="Download Icon" />
          }
          onClick={handleDownloadPDF}
        />
        <CVprototype
          personalInfo={personalInfo}
          educationList={educationList}
          saveFormData={saveFormData}
          currentEducation={currentEducation}
        />
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
