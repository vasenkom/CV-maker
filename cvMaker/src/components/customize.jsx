export function CustomizeFunctions({
  customizeMode,
  changeHeadColor,
  headColor,
  headFontColor,
  changeHeadFontColor,
  changeFontFamily,
}) {
  const renderColorInput = (label, name, value, onChange, id) => (
    <div id={id}>
      <p className="personal-info-label">{label}</p>
      <input type="color" name={name} value={value} onChange={onChange} />
    </div>
  );

  const fonts = [
    { id: "serif", label: "Serif", family: '"Times New Roman", serif' },
    { id: "sans", label: "Sans", family: '"Libre Franklin", sans-serif' },
    { id: "mono", label: "Mono", family: '"Courier New", monospace' },
  ];

  return (
    <div style={{ display: customizeMode ? "block" : "none" }}>
      {renderColorInput(
        "Accent Color",
        "headColor",
        headColor,
        changeHeadColor,
        "form2"
      )}
      {renderColorInput(
        "CV Font Color",
        "headFontColor",
        headFontColor,
        changeHeadFontColor,
        "form2"
      )}

      <div id="form">
        <p className="personal-info-label">Font</p>
        <div className="fontButtons">
          {fonts.map((font) => (
            <button
              key={font.id}
              type="button"
              name="fonts"
              id={font.id}
              onClick={() => changeFontFamily(font.family)}
            >
              Aa <br /> {font.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
