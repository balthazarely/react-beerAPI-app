import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainLayout />
    </div>
  );
}

export default App;
