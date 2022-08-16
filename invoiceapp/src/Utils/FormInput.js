import React from "react";

const FormInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  className,
}) => (
  <>
    <div>
      <label>{label}</label>
    </div>
    <input
      className={className || "input"}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
  </>
);

export default FormInput;
