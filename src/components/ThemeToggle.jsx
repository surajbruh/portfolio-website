import { useState, useEffect } from "react";
const ThemeToggle = () => {
  const [isLightThemed, setIsLightThemed] = useState(true);

  useEffect(() => {
    isLightThemed
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [isLightThemed]);

  return (
    <button
      className="inline-flex"
      onClick={() => setIsLightThemed(!isLightThemed)}
    >
      <img
        src={isLightThemed ? "/svg/light-theme.svg" : "/svg/dark-theme.svg"}
        alt={`${isLightThemed ? "light-theme" : "dark-theme"} icon`}
        loading="lazy"
        className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-80"
      />
    </button>
  );
};

export default ThemeToggle;
