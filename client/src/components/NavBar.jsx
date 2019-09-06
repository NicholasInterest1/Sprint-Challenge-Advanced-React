import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import styled from "styled-components";

function NavBar() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      <h1>Women's World Cup</h1>
        <TheBtn data-testid="darkmode" onClick={toggleMode}>Dark Mode: {darkMode ? 'On': 'Off'}</TheBtn>
      </div>
  );
};

const TheBtn = styled.button`
  border-radius: 4px;
`;

export default NavBar;