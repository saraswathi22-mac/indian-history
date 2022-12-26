import React from "react";
import { Button } from "../../common/Button/Button";
import { MainHeading, SubHeading } from "../../common/Headings/Headings";
import ImageSlider from "../../common/ImageSlider/ImageSlider";
import { SliderData } from "../../common/ImageSlider/SliderData";

const AncientHistory = () => {
  return (
    <div className="history">
      <MainHeading mainHeading="Ancient History" />
      <SubHeading subHeading="Making History"/>
      <li className="subHeading">PreHistory - no history, no written doc</li>
      <li className="subHeading">Stone age: 2million - 4000BC b. Copper age/charcolithic: 4000-1500BC c. Iron age: 1500BC-600BC</li>
      <li className="subHeading">Protohistory - records but cannot be understood; indus valley civilization etc</li>
      <li className="subHeading">History - with understandable records; medieval, modern history</li>
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
