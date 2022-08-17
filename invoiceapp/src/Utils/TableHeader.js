const TableHeader = (props) => {
  const { columns, className } = props;
  //   console.log(columns);
  return (
    <>
      {columns.map((item, index) => (
        <div className={className || "table-header-row"}>{item.title}</div>
      ))}
    </>
  );
};

export default TableHeader;
