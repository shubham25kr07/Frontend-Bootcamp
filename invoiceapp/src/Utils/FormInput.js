import React from "react";

const FormInput = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {/* <label for="firstname" className="placeholder">
      {label}
    </label> */}
    <div className="cut"></div>
    <input
      className="input"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
