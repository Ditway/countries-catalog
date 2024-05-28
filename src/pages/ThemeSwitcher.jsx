import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const getUserTheme = () => {
    const theme = localStorage.getItem("theme") || "light";
    return theme;
  };
  const [theme, setTheme] = useState(getUserTheme());

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const switchTheme = (themePref) => {
    localStorage.setItem("theme", themePref);
    setTheme(themePref);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      return switchTheme("dark");
    }
    switchTheme("light");
  };

  const themeIcon =
    theme === "light" ? (
      <i className="fa-regular fa-sun"></i>
    ) : (
      <i className="fa-regular fa-moon"></i>
    );

  const themeName = theme === "light" ? "Light" : "Dark";

  return (
    <button className="toggleBtn" onClick={toggleTheme}>
      {themeIcon}
      {themeName} Mode
    </button>
  );
};

export default ThemeSwitcher;
