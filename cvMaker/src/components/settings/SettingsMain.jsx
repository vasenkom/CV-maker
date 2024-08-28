import { SettingsButtons } from "./Buttons";

export function SettingPart() {
  // Add functionality to each button here

  return (
    <div id="SettingPart">
      <>
        <SettingsButtons text="Content" id="ContentButton" image="#" />
        <SettingsButtons text="Customize" id="CustomizeButton" image="#" />
      </>
    </div>
  );
}
