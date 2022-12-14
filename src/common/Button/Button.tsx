import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

type Locate = {
  locate: string;
  title: string;
};

export const Button = ({ locate, title }: Locate) => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-btn" onClick={() => navigate(locate)}>
      {title}
    </button>
  );
};
