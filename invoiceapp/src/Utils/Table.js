const Table = (props) => {
  const { column, datalist } = props;
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => (
            <th key={index}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datalist.map((item, index) => (
          <tr key={index}>
            {column.map((col, key) => (
              <td key={key}>{col.render(item)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
