import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDarkThemed, setIsDarkThemed } = useContext(ThemeContext);

  const handleClick = () => {
    const newTheme = !isDarkThemed;

    setIsDarkThemed(newTheme);
    localStorage.setItem("dark-theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      aria-pressed={isDarkThemed}
      className="inline-flex items-center justify-center"
    >
      <img
        src={isDarkThemed ? "/svg/dark-theme.svg" : "/svg/light-theme.svg"}
        alt="Theme toggle icon"
        loading="lazy"
        className={`w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-80 ${isDarkThemed && "invert-100"}`}
      />
    </button>
  );
};

export default ThemeToggle;
