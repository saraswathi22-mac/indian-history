import React from "react";
import { useNavigate } from "react-router-dom";
import "./AncientHistory.css"
import SourcesOfAncientHistory from "./SourcesOfAncientHistory/SourcesOfAncientHistory";

const AncientHistory = () => {
  const navigate = useNavigate();
  return (
    <div className="ancient-history">
      <h1>Ancient History</h1>
      <SourcesOfAncientHistory />
      <button
        className="btn"
        onClick={() => navigate("/ancient_history/stone_age")}
      >
        Stone Age
      </button>
      <button
        className="btn"
        onClick={() => navigate("/ancient_history/stone_age")}
      >
        Stone Age
      </button>
    </div>
  );
};

export default AncientHistory;
