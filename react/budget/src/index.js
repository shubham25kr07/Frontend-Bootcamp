
import React, { StrictMode } from "react";


import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


// ReactDOM.render(
//   <div>
//     <h1>Hello</h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

