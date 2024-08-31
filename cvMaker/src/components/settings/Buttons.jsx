export function SettingsButtons({ text, id, image }) {
  const buttonStyle = {
    backgroundColor: "white",
    fontSize: "20px",
    borderRadius: "10px",
    border: "1px solid rgb(235, 235, 235)",
    padding: "5px 7px",
    cursor: "pointer",
  };

  // Add functionality to each button here

  return (
    <button className="settingButton" id={id} style={buttonStyle}>
      {image} {text}
    </button>
  );
}
