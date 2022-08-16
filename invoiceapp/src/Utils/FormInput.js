import React from "react";

const FormInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  onBlur,
}) => (
  <>
    <div>
      <label>{label}</label>
    </div>
    <input
      className="input"
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
  </>
);

export default FormInput;
