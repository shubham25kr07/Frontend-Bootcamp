import { useContext } from "react";
import { ITEM_COLUMN } from "../utils/Constants";
import Table from "../utils/Table";
import { EntityDetailsContext } from "../App";
import { Link } from "react-router-dom";
import AddBox from "../utils/AddBox";

const Item = () => {
  const { itemList } = useContext(EntityDetailsContext);
  const pagination = false;

  return (
    <div>
      {itemList && itemList.length > 0 ? (
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
      ) : (
        <AddBox value="Item" link="/item/add" />
      )}
    </div>
  );
};

export default Item;
