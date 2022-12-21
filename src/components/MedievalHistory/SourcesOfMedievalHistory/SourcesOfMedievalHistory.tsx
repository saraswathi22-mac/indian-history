import React, { useState } from "react";
import Container from "../../../common/Container/Container";
import { Heading } from "../../../common/Headings/Headings";
import {
  data,
  historicalTextDelhiSultanate,
  historicalTextMughal,
  foreigners,
  indigenousLiterature,
  modernHistorian,
} from "../../../database/MedievalHistory/SourcesOfMedievalHistory";
import "./SourcesOfMedievalHistory.css";

const SourcesOfMedievalHistory = () => {
  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.title}
    </li>
  ));

  return (
    <Container>
      <Heading heading="Sources of Ancient India" />
      <div className="tabs">
        <ul className="tabs-titles">{listTitles}</ul>
        <div className="tab-content">
          {data.map((item) => (
            <p style={visibleTab === item.id ? {} : { display: "none" }}>
              {item.id === 1 && (
                <div className="ancient-content">
                  <div className="sub-heading">{item.title}</div>
                  {historicalTextDelhiSultanate.map((text) => {
                    const { heading, description } = text;
                    return (
                      <>
                        <div className="historical-heading">{heading}</div>
                        <p>{description}</p>
                      </>
                    );
                  })}
                  {historicalTextMughal.map((text) => {
                    const { heading, description } = text;
                    return (
                      <>
                        <div className="historical-heading">{heading}</div>
                        <p>{description}</p>
                      </>
                    );
                  })}
                </div>
              )}
              {item.id === 2 && (
                <div className="ancient-content">
                  <div className="sub-heading">{item.title}</div>
                  {foreigners.map((foreigner) => {
                    const { heading, description } = foreigner;
                    return (
                      <>
                        <div className="historical-heading">{heading}</div>
                        <p>{description}</p>
                      </>
                    );
                  })}
                </div>
              )}
              {item.id === 3 && (
                <div className="ancient-content">
                  <div className="sub-heading">{item.title}</div>
                  {indigenousLiterature.map((foreigner) => {
                    const { heading, description } = foreigner;
                    return (
                      <>
                        <div className="historical-heading">{heading}</div>
                        <p>{description}</p>
                      </>
                    );
                  })}
                </div>
              )}
              {item.id === 4 && (
                <div className="ancient-content">
                  <div className="sub-heading">{item.title}</div>
                  {modernHistorian.map((foreigner) => {
                    const { heading, description } = foreigner;
                    return (
                      <>
                        <div className="historical-heading">{heading}</div>
                        <p>{description}</p>
                      </>
                    );
                  })}
                </div>
              )}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SourcesOfMedievalHistory;
