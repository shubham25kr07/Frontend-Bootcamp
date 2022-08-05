import { getByLabelText } from "@testing-library/dom";
import { useEffect, useState } from "react";
import ENTITY from "../Utils/Constants";
import Table from "../Utils/Table";
import CustomerForm from "./CustomerForm";
const Customer = () => {
  const [customerList, setCustomerList] = useState([]);
  const [flag, setFlag] = useState(0);
  const CUSTOMER_ENTITY = ENTITY.CUSTOMER_ENTITY;

  useEffect(() => {
    // call customer get method in order to get the customerlist
    callAPI();
  }, []);

  const callAPI = () => {
    const data = JSON.parse(localStorage.getItem(CUSTOMER_ENTITY)) || [];

    setCustomerList(data);
  };
  const showTable = () => {
    setFlag(!flag);

    setCustomerList(JSON.parse(localStorage.getItem(CUSTOMER_ENTITY)));
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
        title: "EMAIL",
        render: (rowData) => {
          return <span>{rowData.email}</span>;
        },
      },
      {
        title: "PHONE NUMBER",
        render: (rowData) => {
          return <span>{rowData.phoneNumber}</span>;
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
      {/* call form component */}

      {flag ? (
        <div>
          <button type="button" onClick={showTable}>
            Add Customer
          </button>
          <Table column={column()} datalist={customerList} />
        </div>
      ) : (
        <div>
          <button type="button" onClick={showTable}>
            Customer List
          </button>
          <CustomerForm setFlag={setFlag} />
        </div>
      )}
    </div>
  );
};
export default Customer;
