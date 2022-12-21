import React from "react";
import Container from "../../../common/Container/Container";
import { Heading } from "../../../common/Headings/Headings";
import { introduction, stoneAgeParts } from "../../../database/AncientHistory/StoneAge";
import "./StoneAge.css";

const StoneAge = () => {
  return (
    <Container>
      <Heading heading="Stone Age" />
      <div className="ancient-container">
        {introduction}
        {stoneAgeParts.map(part => {
          const {heading, description} = part;
          return (
            <>
              <h4>{heading}</h4>
              {description}
            </>
          )
        })}
      </div>
    </Container>
  );
};

export default StoneAge;
