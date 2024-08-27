export function SettingsButtons({ text, id, image }) {
  const buttonStyle = {
    backgroundColor: "white",
    fontSize: "20px",
    borderRadius: "10%",
    border: "none",
    padding: "5px 7px",
    cursor: "pointer",
  };

  return (
    <button id={id} style={buttonStyle}>
      {image} {text}
    </button>
  );
}
