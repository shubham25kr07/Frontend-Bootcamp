const Table = (props) => {
  const {
    column,
    datalist,
    setCurrentPage,
    currentPage,
    pagination = true,
  } = props;
  const clickedOnRow = (e) => {
    // console.log("clcikedf", e.target.parentElement.innerHTML);
    console.log("clcikedf", e.target.parentElement);

    const x = e.target.parentElement;
    // while(e.target!="tr"){
    //   console.log(e.target)
    //   e.target=e.target.tr
    // }
  };
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
              <tr key={index} onClick={clickedOnRow}>
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
        {pagination === true ? (
          <div>
            {currentPage > 1 ? (
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

            <button
              onClick={() => {
                setCurrentPage((prePage) => {
                  return prePage + 1;
                });
              }}
            >
              Next
            </button>
          </div>
        ) : null}
      </table>
    </div>
  );
};

export default Table;
