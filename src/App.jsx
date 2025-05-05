import React from "react";
import Navbar from "./components/Navbar";
import { CustomThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <CustomThemeProvider>
      <Navbar />
    </CustomThemeProvider>
  )
}

export default App;
