import React from 'react'
import { useNavigate } from "react-router-dom";
import SourcesOfMedievalHistory from './SourcesOfMedievalHistory/SourcesOfMedievalHistory'

const MedievalHistory = () => {
  const navigate = useNavigate();
  return (
    <div className="ancient-history">
      <h1>Medieval History</h1>
      <SourcesOfMedievalHistory />
      <button
        className="btn"
        onClick={() => navigate("/medieval_history/stone_age")}
      >
        Stone Age
      </button>
      <button
        className="btn"
        onClick={() => navigate("/medieval_history/indus_valley_civilization")}
      >
        Indus Valley Civilization
      </button>
      <a href='https://www.youtube.com/watch?v=Yd0FVj3sS9E&list=LL&index=244&t=31s' target="_blank">Rakhigadi youtube video</a>
    </div>
  )
}

export default MedievalHistory