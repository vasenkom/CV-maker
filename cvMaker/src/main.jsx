import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SettingPart } from "./components/settings/SettingsMain";
import { Forms } from "./components/forms/allForms";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div id="Application">
      <div id="Left">
        <Forms />
        <SettingPart />
      </div>
      <div id="Right"></div>
    </div>
  </StrictMode>
);
