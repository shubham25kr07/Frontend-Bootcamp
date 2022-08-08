import { useContext, useEffect, useState } from "react";
import { ENTITY, ITEM_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import { entityDetails } from "../App";
import { Link } from "react-router-dom";

const Item = () => {
  const { itemList, setItemList } = useContext(entityDetails);

  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = () => {
    const data = JSON.parse(localStorage.getItem(ENTITY.ITEM_ENTITY)) || [];
    setItemList(data);
  };

  return (
    <div>
      <div className="table-form">
        <div class="customers-addcustomer">
          <h1>Items</h1>
          <Link to="/item/add" className="add-button">
            <i class="fa fa-plus"></i>
            Add Item
          </Link>
        </div>
        <Table column={ITEM_COLUMN} datalist={itemList} />
      </div>
    </div>
  );
};

export default Item;
