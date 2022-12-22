import React from "react";
import { Button } from "../../common/Button/Button";
import { MainHeading } from "../../common/Headings/Headings";
import ImageSlider from "../../common/ImageSlider/ImageSlider";
import { SliderData } from "../../common/ImageSlider/SliderData";

const AncientHistory = () => {
  return (
    <div className="history">
      <MainHeading mainHeading="Ancient History" />
      <Button
        locate="/ancient_history/sources_ancient_history"
        title="Sources of Ancient History"
      />
      <Button locate="/ancient_history/stone_age" title="Stone Age" />
      <Button
        locate="/ancient_history/indus_valley_civilization"
        title="Indus Valley Civilization"
      />
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default AncientHistory;
