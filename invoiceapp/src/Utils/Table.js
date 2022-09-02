const Table = (props) => {
  const {
    column,
    datalist,
    setCurrentPage,
    onPageChange,
    pagination = true,
    totalPage,
  } = props;

  return (
    <div className="table-container">
      <table className="content-table">
        <thead>
          <tr>
            {column.map((item, index) =>
              item.title !== "ID" ? <th key={index}>{item.title}</th> : null
            )}
          </tr>
        </thead>
        <tbody>
          {datalist &&
            datalist.map((item, index) => (
              <tr key={index}>
                {column.map((col, key) =>
                  col.title !== "ID" ? (
                    <td key={key}>{col.render(item)}</td>
                  ) : null
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {pagination === true ? (
        <div>
          {onPageChange > 1 ? (
            <button
              onClick={() => {
                setCurrentPage((prePage) => {
                  if (prePage > 1) return prePage - 1;
                  return prePage;
                });
              }}
            >
              Prev
            </button>
          ) : null}
          {onPageChange < totalPage ? (
            <button
              onClick={() => {
                setCurrentPage((prePage) => {
                  return prePage + 1;
                });
              }}
            >
              Next
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
