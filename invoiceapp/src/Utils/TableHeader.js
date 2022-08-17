const TableHeader = (props) => {
  const { columns } = props;
  //   console.log(columns);
  return (
    <>
      {columns.map((item, index) => (
        <div className="table-header-row">{item.title}</div>
      ))}
    </>
  );
};

export default TableHeader;
