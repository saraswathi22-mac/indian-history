import React from "react";
import { Button } from "../../common/Button/Button";
import { MainHeading } from "../../common/Headings/Headings";

const MedievalHistory = () => {
  return (
    <div className="history">
      <MainHeading mainHeading="Medieval History" />
      <Button
        locate="/medieval_history/sources_medieval_history"
        title="Sources of Medieval History"
      />
      <Button
        locate="/medieval_history/mughal_empire"
        title="The Mughal empire"
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
