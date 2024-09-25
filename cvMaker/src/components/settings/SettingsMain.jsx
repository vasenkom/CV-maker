import { SettingsButtons } from "./Buttons";
import { ToggleSwitch } from "./ToggleSwitch";
import brush from "../../icons/customize.png";
import layers from "../../icons/layers.png";

export function SettingPart({
  isChecked,
  stateMessage,
  toggleHandler,
  customizeModeOn,
  customizeModeOff,
}) {
  return (
    <div id="SettingPart">
      <div
        id="SettingPartContext"
        style={{
          margin: "10px",
        }}
      >
        <div className="settingsButtonDiv">
          <SettingsButtons
            text="Content"
            id="ContentButton"
            className="ContentButton"
            onClick={customizeModeOff}
            image={
              <img src={layers} className="icons" alt="See content Icon" />
            }
          />
          <SettingsButtons
            text="Customize"
            id="CustomizeButton"
            className="ContentButton"
            onClick={customizeModeOn}
            image={<img src={brush} className="icons" alt="Customize Icon" />}
          />
        </div>
        <ToggleSwitch
          isChecked={isChecked}
          stateMessage={stateMessage}
          toggleHandler={toggleHandler}
        />
      </div>
    </div>
  );
}
