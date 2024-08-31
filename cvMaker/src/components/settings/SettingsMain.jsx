import { SettingsButtons } from "./Buttons";
import { ToggleSwitch } from "./ToggleSwitch";

export function SettingPart() {
  return (
    <div id="SettingPart">
      <div
        id="SettingPartContext"
        style={{
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <SettingsButtons text="Content" id="ContentButton" image="#" />
          <SettingsButtons text="Customize" id="CustomizeButton" image="#" />
        </div>
        <ToggleSwitch />
      </div>
    </div>
  );
}
