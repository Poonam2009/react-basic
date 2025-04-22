import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext"

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <span>☀️ Light Mode</span>
      ) : (
        <span>🌙 Dark Mode</span>
      )}
    </button>
  );
};

export default ThemeToggle;