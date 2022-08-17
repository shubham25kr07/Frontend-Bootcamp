const TextArea = ({ className, id, value, name, onChange, onBlur }) => {
  return (
    <textarea
      className={className}
      id={id}
      value={value}
      name={name}
      rows="4"
      cols="50"
      onChange={onChange}
      onBlur={onBlur}
    ></textarea>
  );
};
export default TextArea;
