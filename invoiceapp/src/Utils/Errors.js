const Errors = ({ value, className }) => {
  return (
    <div>
      {value && <div className={className || "customer-error"}>{value}</div>}
    </div>
  );
};

export default Errors;
