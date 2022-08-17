import { useContext, useEffect, useState } from "react";
import { ITEM_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import { EntityDetailsContext } from "../App";
import { Link } from "react-router-dom";

const Item = () => {
  const { itemList, setItemList } = useContext(EntityDetailsContext);
  const pagination = false;

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
        <Table
          column={ITEM_COLUMN}
          datalist={itemList}
          pagination={pagination}
        />
      </div>
    </div>
  );
};

export default Item;
