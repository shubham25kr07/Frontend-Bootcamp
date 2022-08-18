const TableCell = ({ data, className }) => {
  return <div className={className || "table-cell"}>{data}</div>;
};

export default TableCell;
