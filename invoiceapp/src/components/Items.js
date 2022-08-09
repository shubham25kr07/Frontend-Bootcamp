import { useContext, useEffect } from "react";
import { ITEM_COLUMN } from "../Utils/Constants";
import Table from "../Utils/Table";
import { EntityDetailsContext } from "../App";
import { Link } from "react-router-dom";

const Item = () => {
  const { itemList, setItemList } = useContext(EntityDetailsContext);
  const url = "http://localhost:8080/v1/item/itemList?page=1";
  useEffect(() => {
    const data = {
      sort_key: "item_name",
      sort_value: "ASC",
    };
    callAPI(url, data);
  }, []);

  const callAPI = (url, data) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        setItemList(json.item);
      })
      .catch((error) => console.table(error));
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

/*
Validator
Item Price

Invoice add->




*/
