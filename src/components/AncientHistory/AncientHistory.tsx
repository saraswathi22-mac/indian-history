import React from "react";
import { Button } from "../../common/Button/Button";
import "./AncientHistory.css";
import SourcesOfAncientHistory from "./SourcesOfAncientHistory/SourcesOfAncientHistory";

const AncientHistory = () => {
  return (
    <div className="ancient-history">
      <h1>Ancient History</h1>
      <SourcesOfAncientHistory />
      <Button locate="/ancient_history/stone_age" title="Stone Age" />
      <Button
        locate="/ancient_history/indus_valley_civilization"
        title="Indus Valley Civilization"
      />
    </div>
  );
};

export default AncientHistory;
