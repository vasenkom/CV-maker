export function CustomizeFunctions({
  customizeMode,
  changeHeadColor,
  headColor,
  headFontColor,
  changeHeadFontColor,
  changeFontFamily,
}) {
  return (
    <div style={{ display: customizeMode ? "block" : "none" }}>
      <div id="form2">
        <p className="personal-info-label">Accent Color </p>
        <input
          type="color"
          name="headColor"
          id="headColor"
          value={headColor}
          onChange={changeHeadColor}
        />
      </div>
      <div id="form2">
        <p className="personal-info-label">CV Font Color</p>
        <input
          type="color"
          name="headFontColor"
          id="headFontColor"
          value={headFontColor}
          onChange={changeHeadFontColor}
        />
      </div>
      <div id="form">
        <p className="personal-info-label">Font</p>
        <div className="fontButtons">
          <button
            type="button"
            name="fonts"
            id="serif"
            onClick={() => changeFontFamily('"Times New Roman", serif')}
          >
            Aa <br /> Serif{" "}
          </button>
          <button
            type="button"
            name="fonts"
            id="sans"
            onClick={() => changeFontFamily('"Libre Franklin", sans-serif')}
          >
            Aa <br /> Sans{" "}
          </button>
          <button
            type="button"
            name="fonts"
            id="mono"
            onClick={() => changeFontFamily('"Courier New", monospace')}
          >
            Aa <br /> Mono{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
