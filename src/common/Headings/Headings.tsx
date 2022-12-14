import React from "react";
import "./Headings.css";

type MainHeading = {
  mainHeading: string;
};

type Heading = {
  heading: string;
};

export const MainHeading = ({ mainHeading }: MainHeading) => {
  return <div className="main_heading">{mainHeading}</div>;
};

export const Heading = ({ heading }: Heading) => {
  return <div className="heading">{heading}</div>;
};
