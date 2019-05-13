import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Questionnaire from "./components/questionnaire";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Questionnaire />
      </header>
    </div>
  );
};

export default App;
