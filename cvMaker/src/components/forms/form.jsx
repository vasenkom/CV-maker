export function Form({ name, value, onChange }) {
  return (
    <input
      type="text"
      className="settingButton"
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  );
}
