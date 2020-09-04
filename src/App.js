import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchPage from "./Components/SearchPage";
import RandomPage from "./Components/RandomPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <SearchPage />
      <RandomPage />
    </>
  );
}

export default App;
