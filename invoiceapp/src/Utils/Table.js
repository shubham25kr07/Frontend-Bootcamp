const Table = (props) => {
  const {
    // flag,
    column,
    datalist,
    setCurrentPage,
    currentPage,
    pagination = true,
    flag = true,
  } = props;

  const clickedOnRow = (e) => {
    // console.log("clcikedf", e.target.parentElement.innerHTML);

    const x = e.target.parentElement.id;
    const arr = datalist.filter((data) => data.id === Number(x));
    console.log(arr);
    // const url = `http://localhost:8080/v1/customer/${x}`;
    // fetch(url, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // console.log("Name: " + name + "\nAge: " + age);
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
              <tr key={index} id={item.id} onClick={flag && clickedOnRow}>
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
