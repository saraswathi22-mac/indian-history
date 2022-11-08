import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AncientHistory from "./components/AncientHistory/AncientHistory";
import IndusValleyCivilization from "./components/AncientHistory/IndusValleyCivilization/IndusValleyCivilization";
import StoneAge from "./components/AncientHistory/StoneAge/StoneAge";
import Home from "./components/Home/Home";
import MedievalHistory from "./components/MedievalHistory/MedievalHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ancient_history" > 
        <Route index element={<AncientHistory />}/>
        <Route path="stone_age" element={<StoneAge />}/>
        <Route path="indus_valley_civilization" element={<IndusValleyCivilization />}/>
      </Route>
      <Route path="/medieval_history" > 
        <Route index element={<MedievalHistory />}/>
      </Route>
    </Routes>
  );
}

export default App;
