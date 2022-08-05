import { useEffect, useState } from "react";
import ENTITY from "../Utils/Constants";
import Form from "../Utils/Form";
import Table from "../Utils/Table";
import ItemForm from "./ItemForm";

const Item = () => {
  const [itemList, setItemList] = useState([]);
  const ITEM_ENTITY = ENTITY.ITEM_ENTITY;
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = () => {
    const data = JSON.parse(localStorage.getItem(ITEM_ENTITY)) || [];

    setItemList(data);
  };

  const showTable = () => {
    setFlag(!flag);

    setItemList(JSON.parse(localStorage.getItem(ITEM_ENTITY)));
  };

  const column = () => {
    return [
      {
        title: "NAME",
        render: (rowData) => {
          return <span>{rowData.name}</span>;
        },
      },
      {
        title: "PRICE",
        render: (rowData) => {
          return <span>{rowData.price}</span>;
        },
      },
      {
        title: "DESCRIPTION",
        render: (rowData) => {
          return <span>{rowData.description}</span>;
        },
      },
      {
        title: "CREATED ON",
        render: (rowData) => {
          return <span>{rowData.created_at}</span>;
        },
      },
    ];
  };
  return (
    <div>
      {flag ? (
        <div>
          <button type="button" onClick={showTable}>
            Add Item
          </button>
          <Table column={column()} datalist={itemList} />
        </div>
      ) : (
        <div>
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
