import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import RandomPage from "./Components/RandomPage";

function App() {
  return (
    <div>
      <HomePage />
      <SearchPage />
      <RandomPage />
    </div>
  );
}

export default App;
