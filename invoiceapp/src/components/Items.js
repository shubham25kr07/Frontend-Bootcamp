import { useContext, useEffect, useState } from "react";
import { ENTITY, ITEM_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import ItemForm from "./ItemForm";
import { entityDetails } from "../App";

const Item = () => {
  const { itemList, setItemList } = useContext(entityDetails);
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
  };

  return (
    <div>
      {flag ? (
        <div className="table-form">
          <div class="customers-addcustomer">
            <h1>Items</h1>
            <button type="button" className="add-button" onClick={showTable}>
              <i class="fa fa-plus"></i>
              Add Item
            </button>
          </div>
          <Table column={ITEM_COLUMN} datalist={itemList} />
        </div>
      ) : (
        <div className="table-form">
          <button type="button" onClick={showTable}>
            Item List
          </button>
          <ItemForm setFlag={setFlag} />
        </div>
      )}
    </div>
  );
};

export default Item;
