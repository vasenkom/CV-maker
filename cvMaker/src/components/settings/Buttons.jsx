export function SettingsButtons({ text, id, image, className, onClick }) {
  // Add functionality to each button here

  return (
    <button id={id} className={className} onClick={onClick}>
      {image} {text}
    </button>
  );
}
