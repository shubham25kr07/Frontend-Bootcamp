import { useEffect, useState } from "react";
import { ENTITY, ITEM_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import ItemForm from "./ItemForm";

const Item = () => {
  const [itemList, setItemList] = useState([]);

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = () => {
    const data = JSON.parse(localStorage.getItem(ENTITY.ITEM_ENTITY)) || [];
    setItemList(data);
  };

  const showTable = () => {
    setFlag(!flag);

    // setItemList(JSON.parse(localStorage.getItem(ENTITY.ITEM_ENTITY)));
  };

  return (
    <div>
      {flag ? (
        <div>
          <button type="button" onClick={showTable}>
            Add Item
          </button>
          <Table column={ITEM_COLUMN} datalist={itemList} />
        </div>
      ) : (
        <div>
          <button type="button" onClick={showTable}>
            Item List
          </button>
          <ItemForm
            setItemList={setItemList}
            setFlag={setFlag}
            itemList={itemList}
          />
        </div>
      )}
    </div>
  );
};

export default Item;
