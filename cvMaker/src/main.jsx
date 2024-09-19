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
  // Personal data main point
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    id: crypto.randomUUID(),
  });

  // Personal dynamic data update
  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [educationList, setEducationList] = useState([]); // Array of education objects

  // Education data main points
  const [currentEducation, setCurrentEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: crypto.randomUUID(),
  });

  // Education data dynamic changes
  const handleEducationInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [visibleForm, setVisibleForm] = useState(false); // Control form visibility

  // makes form appear after pressing +
  function makeFormAppear() {
    setVisibleForm(true);
    setSaveFormData(true);
  }

  const [saveFormData, setSaveFormData] = useState(false); // Control if education data is saved or not
  const [editingIndex, setEditingIndex] = useState(null); // Index of editing data

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
      id: null,
    });

    // Hide form after saving
    setVisibleForm(false);
  }

  function cancelEducationInfo() {
    setCurrentEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      id: null, // Ensure a new id is generated for the next entry
    });
    setVisibleForm(false); // make the form disappear
    setSaveFormData(false); // cancel the foem on cv prototype
  }

  function deleteEducationInfo(index) {
    setEducationList((prevList) => prevList.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setCurrentEducation(educationList[index]); // Updating current data dynamicaly
    setEditingIndex(index); // Set the current index being edited
    setVisibleForm(true); // Show the form to edit
    setSaveFormData(true);
  }

  //Settung for a toggle switch
  const [isChecked, setIsChecked] = useState(false); // toggle switch statues
  const [stateMessage, setStateStatus] = useState("Example is not shown"); // toggle switch massage

  const toggleHandler = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);

    if (newIsChecked) {
      setStateStatus("Example is shown");
      setPersonalInfo({
        name: "John Doe",
        phone: "+123457890",
        address: "Czech Republic",
        email: "mail@mail.com",
      });

      setEducationList([
        {
          school: "ABC",
          degree: "Master degree in Biotechnology",
          startDate: "09.2023",
          endDate: "06.2025",
          location: "Prague, Czech Republic",
          id: crypto.randomUUID(),
        },
      ]);
      setVisibleForm(false); // Close the editing form
      // setSaveFormData(true); // Set save form data to true when toggled on
      // makeFormAppear();
    } else {
      setStateStatus("Example is not shown");
      setPersonalInfo({ name: "", phone: "", address: "", email: "" });

      setCurrentEducation({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        id: null,
      });

      if (educationList.length > 0) {
        deleteEducationInfo(educationList.length - 1); // Deletes the last entry = example
      }

      setVisibleForm(false); // Reset save form data
    }
  };

  return (
    <div id="Application">
      <div id="Left">
        <SettingPart
          personalInfo={personalInfo}
          isChecked={isChecked}
          stateMessage={stateMessage}
          toggleHandler={toggleHandler}
        />
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
          cancelEducationInfo={cancelEducationInfo}
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
