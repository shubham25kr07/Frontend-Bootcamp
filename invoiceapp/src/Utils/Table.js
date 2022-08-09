const Table = (props) => {
  const { column, datalist } = props;
  return (
    <div className="table-container">
      <table className="content-table">
        <thead>
          <tr>
            {column.map(
              (item, index) =>
                item.title !== "ID" ? <th key={index}>{item.title}</th> : null
              // <th key={index}>{item.title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {datalist &&
            datalist.map((item, index) => (
              <tr key={item.id || index}>
                {column.map(
                  (col, key) =>
                    col.title !== "ID" ? (
                      <td key={key}>{col.render(item)}</td>
                    ) : null
                  // <td key={key}>{col.render(item)}</td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
