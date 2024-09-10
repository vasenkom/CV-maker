export function SettingsButtons({ text, id, image, className, onclick }) {
  // Add functionality to each button here

  return (
    <button id={id} className={className} onClick={onclick}>
      {image} {text}
    </button>
  );
}
