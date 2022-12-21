import React from "react";
import SourcesOfMedievalHistory from "./SourcesOfMedievalHistory/SourcesOfMedievalHistory";
import { Button } from "../../common/Button/Button";
import { MainHeading } from "../../common/Headings/Headings";

const MedievalHistory = () => {
  return (
    <div className="history">
      <MainHeading mainHeading="Medieval History" />
      <SourcesOfMedievalHistory />
      <Button locate="/medieval_history/stone_age" title="Stone Age" />
      <Button
        locate="/medieval_history/indus_valley_civilization"
        title="Indus Valley Civilization"
      />
      <a
        href="https://www.youtube.com/watch?v=Yd0FVj3sS9E&list=LL&index=244&t=31s"
        target="_blank"
      >
        Rakhigadi youtube video
      </a>
    </div>
  );
};

export default MedievalHistory;
