import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import DrawerMenu from "./components/Layout/DrawerMenu";
import "./firebase/firebase";

function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
