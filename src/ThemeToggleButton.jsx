// import React, { useState } from "react";
import "./App.css";
import { useTheme } from "./ThemeProvider";
const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  // const [isMobile, setIsMobile] = useState(toggleTheme);
  return(
  <div>
    <button className="mero" onClick={toggleTheme}>
    <i class="fa-solid fa-sun"></i></button>
  </div>
  )
};

export default ThemeToggleButton;
