import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

function NavBar() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      <h1>Women's World Cup</h1>
        <button data-testid="darkmode" onClick={toggleMode}>Dark Mode: {darkMode ? 'On': 'Off'}</button>
      </div>
  );
};

export default NavBar;