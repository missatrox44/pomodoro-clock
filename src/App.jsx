import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Header from "./components/Header";
import Pomodoro from "./components/Pomodoro";


function App() {
  return (
    <>
      <Header />
      <Pomodoro />
    </>
  );
}
export default App;
