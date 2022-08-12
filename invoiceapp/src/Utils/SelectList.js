import { useEffect, useState } from "react";

const SelectList = (props) => {
  const [selectedId, setSelectedId] = useState([]);
  const { dataList } = props;
  const addSelectedRows = (e) => {
    e.preventDefault();
    console.log(e);
  };
  useEffect(() => {
    setSelectedId(() => {
      return Array.apply(false, Array(dataList.length)).map((x) => false);
    });
  }, []);
  const handleSelectChange = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  };
  const addItem = (e) => {
    setSelectedId((prevSelectId) => {
      prevSelectId[Number(e.target.id)] = !prevSelectId[Number(e.target.id)];
      return prevSelectId;
    });
    console.log(selectedId);
  };

  return (
    <form id="form2" onSubmit={addSelectedRows}>
      <div>
        <label for="one">
          <input onClick={addItem} type="checkbox" id="one" />
          First checkbox
        </label>
        <label for="two">
          <input type="checkbox" id="two" />
          Second checkbox
        </label>
        <label for="three">
          <input type="checkbox" id="three" />
          Third checkbox
        </label>
      </div>
      {/*       
      <select width="100%" multiple>
        {dataList.map((item, index) => (
       
          <option type= checkbox key={index} id={index} onClick={addItem}>
            Name: {item.Item_Name} | Price: {item.price}
          </option>
        ))}
      </select> */}
      <button>Add This Items</button>
    </form>
  );
};
export default SelectList;