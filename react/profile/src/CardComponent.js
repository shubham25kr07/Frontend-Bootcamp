import React from "react";
import "./index.css";
import pick from "./image.png";
const CardComponent = (props) => {
  const { name, email } = props;
  return (
    <div className="card">
      <img src={pick} alt="Avatar" />
      <div className="container">
        <h4>{name}</h4>
        <h5>{email}</h5>
      </div>
    </div>
  );
};

export default CardComponent;
