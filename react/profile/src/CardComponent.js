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
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </div>
