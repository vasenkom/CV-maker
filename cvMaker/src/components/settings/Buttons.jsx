export function SettingsButtons({ text, id, image, className }) {
  // Add functionality to each button here

  return (
    <button id={id} className={className}>
      {image} {text}
    </button>
  );
}
