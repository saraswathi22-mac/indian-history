import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AncientHistory from "./components/AncientHistory/AncientHistory";
import StoneAge from "./components/AncientHistory/StoneAge/StoneAge";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ancient_history" > 
        <Route index element={<AncientHistory />}/>
        <Route path="stone_age" element={<StoneAge />}/>
      </Route>
    </Routes>
  );
}

export default App;
