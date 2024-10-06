import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SettingPart } from "./components/settings/SettingsMain";
import { PersonalForms } from "./components/forms/PersonalForms";
import { EducationForm } from "./components/forms/EducationForm";
import { CVprototype } from "./components/CV";
import { SettingsButtons } from "./components/settings/Buttons";
import { handleDownloadPDF } from "./components/downloadPDF";
import { JobForm } from "./components/forms/JobExperience";
import { CustomizeFunctions } from "./components/customize";
import downloadIcon from "./icons/download_icon.png";

import "./index.css";

// Default values
const defaultPersonalInfo = {
  name: "",
  phone: "",
  address: "",
  email: "",
  id: crypto.randomUUID(),
};

const defaultEducation = {
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
  location: "",
  id: crypto.randomUUID(),
};

const defaultJob = {
  companyName: "",
  positionTitle: "",
  startDateJob: "",
  endDateJob: "",
  locationJob: "",
  descriptionJob: "",
  idJob: crypto.randomUUID(),
};

function Application() {
  // Personal data main point
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);

  // Personal/Education/Job data dynamic update
  const handleInputChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prevData) => ({ ...prevData, [name]: value }));
  };

  const [educationList, setEducationList] = useState([]); // Array of education objects

  // Education data main points
  const [currentEducation, setCurrentEducation] = useState(defaultEducation);

  const [visibleForm, setVisibleForm] = useState(false); // Control form visibility

  // Makes education form appear after pressing +
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

    // Reset currentEducation after saving,
    setCurrentEducation(defaultEducation);

    // Hide form after saving
    setVisibleForm(false);
  }

  function cancelEducationInfo() {
    setCurrentEducation(defaultEducation);
    setVisibleForm(false); // make the form disappear
    setSaveFormData(false); // cancel the form on CV prototype
  }

  function deleteEducationInfo(index) {
    setEducationList((prevList) => prevList.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setCurrentEducation(educationList[index]); // Updating current data dynamically
    setEditingIndex(index); // Set the current index being edited
    setVisibleForm(true); // Show the form to edit
    setSaveFormData(true);
  }

  // Job Experience part
  const [jobList, setJobList] = useState([]); // Array of job objects

  // Job data main points
  const [currentJobInput, setCurrentJobInput] = useState(defaultJob);

  const [visibleJobForm, setVisibleJobForm] = useState(false); // Control job form visibility

  // Makes form appear after pressing +
  function makeJobFormAppear() {
    setVisibleJobForm(true);
    setSaveJobFormData(true);
  }

  const [saveJobFormData, setSaveJobFormData] = useState(false); // Control if job data is saved or not
  const [editingJobIndex, setEditingJobIndex] = useState(null); // Index of editing job data

  function saveJobInfo() {
    setSaveJobFormData(false);

    if (editingJobIndex !== null) {
      // If in edit mode, update the existing job entry
      setJobList((prevList) => {
        const updatedJobList = [...prevList];
        updatedJobList[editingJobIndex] = currentJobInput; // Update the item at editingJobIndex
        return updatedJobList;
      });
      setEditingJobIndex(null); // Exit edit mode
    } else {
      // If not editing, add a new job entry with a unique id
      setJobList((prevList) => [
        ...prevList,
        { ...currentJobInput, idJob: crypto.randomUUID() }, // Assign a new unique id
      ]);
    }

    // Reset currentJobInput after saving, with a new unique id
    setCurrentJobInput(defaultJob);

    // Hide form after saving
    setVisibleJobForm(false);
  }

  function cancelJobInfo() {
    setCurrentJobInput(defaultJob);
    setVisibleJobForm(false); // make the form disappear
    setSaveJobFormData(false); // cancel the form on CV prototype
  }

  function deleteJobInfo(index) {
    setJobList((prevList) => prevList.filter((_, i) => i !== index));
  }

  function handleJobEdit(index) {
    setCurrentJobInput(jobList[index]); // Updating current data dynamically
    setEditingJobIndex(index); // Set the current index being edited
    setVisibleJobForm(true); // Show the form to edit
    setSaveJobFormData(true);
  }

  // Setting for a toggle switch
  const [isChecked, setIsChecked] = useState(false); // toggle switch status
  const [stateMessage, setStateStatus] = useState("Example is not shown"); // toggle switch message

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
          school: "ABC University",
          degree: "Master degree in Biochemistry",
          startDate: "09.2023", // Adjust start date for Bachelor's degree
          endDate: "06.2025",
          location: "Prague, Czech Republic",
          id: crypto.randomUUID(),
        },
        {
          school: "ABC University",
          degree: "Bachelor degree in Biotechnology",
          startDate: "09.2020",
          endDate: "06.2023",
          location: "Prague, Czech Republic",
          id: crypto.randomUUID(),
        },
      ]);

      setJobList([
        {
          companyName: "Company A",
          positionTitle: "Manager",
          startDateJob: "12.2024",
          endDateJob: "present",
          locationJob: "Prague, Czech Republic",
          descriptionJob:
            "Overseeing key operations and driving strategic initiatives to improve efficiency and performance at Company A. Managing teams, optimizing processes, and ensuring the achievement of business objectives in a fast-paced environment.",
          idJob: crypto.randomUUID(),
        },
      ]);

      setVisibleForm(false); // Close the editing form
      setVisibleJobForm(false);
    } else {
      setStateStatus("Example is not shown");
      setPersonalInfo({ name: "", phone: "", address: "", email: "" });

      setCurrentEducation(defaultEducation);

      setCurrentJobInput(defaultJob);

      if (educationList.length > 0) {
        deleteEducationInfo(educationList.length - 1); // Deletes the last entry = example
      }

      if (jobList.length > 0) {
        deleteJobInfo(jobList.length - 1); // Deletes the last entry = example
      }

      setVisibleForm(false); // Reset save form data
      setVisibleJobForm(false);
    }
  };

  const [customizeMode, setCustomizeMode] = useState(false);

  function customizeModeOff() {
    setCustomizeMode(false);
    console.log("CV data mode");
  }

  function customizeModeOn() {
    setCustomizeMode(true);
    console.log("CV customize mode");
  }

  // head color of cv
  const [headColor, setHeadColor] = useState("rgb(34, 73, 104)"); // default color for head is dark blue

  function changeHeadColor(event) {
    setHeadColor(event.target.value);
  }

  // head color of cv font
  const [headFontColor, setHeadFontColor] = useState("white"); // default color for head font color is white

  function changeHeadFontColor(event) {
    setHeadFontColor(event.target.value);
  }

  // cv font settings
  const [cvFont, setCVfont] = useState('"Libre Franklin", sans-serif'); // default font is "Libre Franklin", sans-serif

  function changeFontFamily(fontfamily) {
    setCVfont(fontfamily);
    console.log("Font family changed to:", fontfamily); // Add this line
  }
  return (
    <div id="Application">
      <div id="Left">
        <SettingPart
          personalInfo={personalInfo}
          isChecked={isChecked}
          stateMessage={stateMessage}
          toggleHandler={toggleHandler}
          customizeModeOn={customizeModeOn}
          customizeModeOff={customizeModeOff}
        />
        <PersonalForms
          personalInfo={personalInfo}
          handleInputChange={handleInputChange(setPersonalInfo)}
          customizeMode={customizeMode}
        />
        <EducationForm
          currentEducation={currentEducation}
          educationList={educationList}
          handleInputChange={handleInputChange(setCurrentEducation)}
          visibleForm={visibleForm}
          makeFormAppear={makeFormAppear}
          saveEducationInfo={saveEducationInfo}
          handleEdit={handleEdit}
          deleteEducationInfo={deleteEducationInfo}
          saveFormData={saveFormData}
          cancelEducationInfo={cancelEducationInfo}
          customizeMode={customizeMode}
        />
        <JobForm
          currentJobInput={currentJobInput}
          jobList={jobList}
          handleJobInputChange={handleInputChange(setCurrentJobInput)}
          visibleJobForm={visibleJobForm}
          makeJobFormAppear={makeJobFormAppear}
          saveJobInfo={saveJobInfo}
          handleJobEdit={handleJobEdit}
          deleteJobInfo={deleteJobInfo}
          saveJobFormData={saveJobFormData}
          cancelJobInfo={cancelJobInfo}
          customizeMode={customizeMode}
        />
        <CustomizeFunctions
          customizeMode={customizeMode}
          changeHeadColor={changeHeadColor}
          headColor={headColor}
          headFontColor={headFontColor}
          changeHeadFontColor={changeHeadFontColor}
          changeFontFamily={changeFontFamily}
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
          jobList={jobList}
          saveJobFormData={saveJobFormData}
          currentJobInput={currentJobInput}
          headColor={headColor}
          headFontColor={headFontColor}
          cvFont={cvFont}
        />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Application />
  </StrictMode>
);
