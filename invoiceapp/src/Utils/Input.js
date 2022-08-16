const Input = ({
  value,
  name,
  type,
  onChange,
  onBlur,
  className,
  isDisabled = false,
}) => {
  return (
    <input
      className={className || "input"}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      disabled={isDisabled}
    />
  );
};

export default Input;
